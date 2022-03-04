import {
    CallHandler,
    ExecutionContext,
    Injectable,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ServerResponse } from 'http';
import { tap } from 'rxjs/operators';

@Injectable()
export class ResponseAddAccessTokenToHeaderInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            tap(e => {
                //@ts-ignore
                if (context.contextType === 'graphql') {
                    const ctx = GqlExecutionContext.create(context);
                    const token = ctx.getArgByIndex(2).token;

                    if (token) {
                        const response: ServerResponse = ctx.getArgByIndex(2).res;
                        response.setHeader('Authorization', 'Bearer ' + token);
                    }
                }
            }),
        );
    }
}
