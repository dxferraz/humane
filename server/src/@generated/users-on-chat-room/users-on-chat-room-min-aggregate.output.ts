import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersOnChatRoomMinAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    chatRoomId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
