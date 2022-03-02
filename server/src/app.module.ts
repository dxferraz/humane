import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      typePaths: [join(process.cwd() + '/db/prisma/generated/schema.graphql')],
      definitions: {
        path: join(process.cwd() + '/db/prisma/generated/graphql_types.ts'),
        outputAs: 'class',
      },
    }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
