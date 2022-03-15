import { Global, Logger, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { EnvironmentModule } from '@nestjs-steroids/environment';
import {
    ApolloErrorConverter,
    extendMapItem,
    mapItemBases,
} from 'apollo-error-converter';
import { PubSub } from 'apollo-server-express';
import { PrismaModule } from 'src/core/prisma';
import { Request } from 'express';
import { NestologModule } from 'nestolog';

import { AppEnvironment } from './app.environment';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

export async function graphqlModuleFactory(logger: Logger) {
    return {
        tracing: false,
        sortSchema: true,
        autoSchemaFile: '~schema.gql',
        installSubscriptionHandlers: true,
        subscriptions: {
            keepAlive: 5000,
        },
        context: (data: any) => {
            return {
                token: undefined as string | undefined,
                req: data.req as Request,
                res: data.res,
            };
        },
        formatError: new ApolloErrorConverter({
            logger: logger.error.bind(logger),
            fallback: {
                // Still send error message in the log
                code: '', // the Error code you want to use
                message: '', // the Error message you want to use
                data: originalError => {
                    // use the original Error to format and return extra data to include
                    return originalError;
                },
            },
            errorMap: [
                {
                    NotFoundError: {
                        name: 'ENTITY_NOT_FOUND',
                        message: 'Entity Not Found',
                        logger: true,
                    },
                    BadRequestException: extendMapItem(mapItemBases.InvalidFields, {
                        logger: true,
                        data: (err: any) => {
                            return err?.response;
                        },
                    }),
                },
            ],
        }),
    };
}

@Global()
@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true, // no need to import into other modules
        }),
        UserModule,
        PrismaModule.registerAsync({
            inject: [AppEnvironment],
            useFactory: async (appEnvironment: AppEnvironment) => {
                return {
                    logQueries: appEnvironment.isDevelopment(),
                };
            },
        }),
        EnvironmentModule.forRoot({
            isGlobal: true,
            loadEnvFile: true,
            useClass: AppEnvironment,
        }),
        GraphQLModule.forRootAsync({
            inject: [Logger],
            useFactory: graphqlModuleFactory,
        }),
        NestologModule.forRoot(),
    ],
    providers: [
        Logger,
        {
            provide: 'PUB_SUB',
            useValue: new PubSub(),
        },
    ],
    exports: [Logger, 'PUB_SUB'],
})
export class AppModule {}
