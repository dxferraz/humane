import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ServerResponse } from 'http';
import { AuthService } from '../auth.service';

@Injectable()
export class ResponseAddAccessTokenToHeaderInterceptor
  implements NestInterceptor
{
  constructor(private authService: AuthService) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((e) => {
        //@ts-ignore
        if (context.contextType === 'graphql') {
          const ctx = GqlExecutionContext.create(context);
          const user = ctx.getArgByIndex(1).user;

          if (user) {
            const response: ServerResponse = ctx.getArgByIndex(2).response;

            response.setHeader(
              'Authorization',
              'Bearer ' + this.authService.login(user).access_token,
            );
          }
        }
      }),
    );
  }
}
