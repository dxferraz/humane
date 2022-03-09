import { UserWhereUniqueInput } from '@generated/user/user-where-unique.input';
import {
    ForbiddenException,
    UnauthorizedException,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import {
    Args,
    Context,
    Info,
    Mutation,
    Parent,
    Query,
    ResolveField,
    Resolver,
} from '@nestjs/graphql';
import { PrismaSelect } from '@paljs/plugins';
import { Prisma } from '@prisma/client';
import { CurrentUser } from 'app_modules/current-user-decorator';
import {
    GraphqlAuthGuard,
    OptionalGraphqlAuthGuard,
} from 'app_modules/nestjs-passport-graphql-auth-guard';
import { GraphQLResolveInfo } from 'graphql';

import { AuthService } from '../auth/auth.service';
import { SessionService } from '../auth/session.service';
import { GraphQLContext, PassportUserFields } from '../types';
import { User } from './models/user.model';
import { UserCreateInput } from './models/user-create.input';
import { UserLoginInput } from './models/user-login.input';
import { UserUpdateInput } from './models/user-update.input';
import { UserService } from './user.service';
import { ResponseAddAccessTokenToHeaderInterceptor } from 'src/auth/interceptors/response-add-access-token-to-header.interceptor';
import { UpdateUserValidation } from 'app_modules/update-user-decorator';

/**
 * Resolves user object type.
 */
@Resolver(() => User)
@UseInterceptors(ResponseAddAccessTokenToHeaderInterceptor)
export class UserResolver {
    constructor(
        private readonly userService: UserService,
        private readonly authService: AuthService,
        private readonly sessionService: SessionService,
    ) {}

    /**
     * Query for self profile.
     */
    @Query(() => User)
    @UseGuards(GraphqlAuthGuard)
    async me(
        @CurrentUser() user: PassportUserFields,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                User: { email: true },
            },
        }).value.select;
        return this.userService.findUnique({ select, where: { email: user.email } });
    }

    /**
     * Query for single user.
     */
    @Query(() => User)
    @UseGuards(OptionalGraphqlAuthGuard)
    async user(
        @Args('where') where: UserWhereUniqueInput,
        @Info() info: GraphQLResolveInfo,
    ) {
        const select = new PrismaSelect(info, {
            defaultFields: {
                User: { userId: true },
            },
        }).value.select;

        return this.userService.findUnique({
            select,
            where,
            rejectOnNotFound: true,
        });
    }

    @Mutation(() => User)
    async createUser(
        @Args('data') data: UserCreateInput,
        @Context() context: GraphQLContext,
    ) {
        const user = await this.userService.create({
            ...data,
            password: await this.userService.createHash(data.password),
        });
        ({ accessToken: context.token } = await this.authService.session(user));
        return user;
    }

    @Mutation(() => User)
    @UseGuards(GraphqlAuthGuard)
    async updateUser(
        @Args('data') @UpdateUserValidation() data: UserUpdateInput,
        @CurrentUser() user: PassportUserFields,
    ) {
        return this.userService.update(
            { email: user.email },
            {
                ...(data as Prisma.UserUpdateInput),
            },
        );
    }

    @Mutation(() => User)
    async loginUser(
        @Args('data') data: UserLoginInput,
        @Context() context: GraphQLContext,
    ) {
        const user = await this.userService.findByCredentials(data);

        if (!user) {
            return new UnauthorizedException();
        }
        ({ accessToken: context.token } = await this.authService.session(user));
        return user;
    }

    @ResolveField(() => String, { nullable: true })
    async token(@Parent() _: User, @Context() context: GraphQLContext) {
        return context.token;
    }
}
