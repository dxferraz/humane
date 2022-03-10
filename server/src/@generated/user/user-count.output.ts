import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    reports?: number;

    @Field(() => Int, {nullable:false})
    usersOnChatRoom?: number;

    @Field(() => Int, {nullable:false})
    messages?: number;

    @Field(() => Int, {nullable:false})
    donations?: number;

    @Field(() => Int, {nullable:false})
    necessities?: number;
}
