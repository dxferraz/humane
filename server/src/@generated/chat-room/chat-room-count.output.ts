import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomCount {

    @Field(() => Int, {nullable:false})
    messages?: number;

    @Field(() => Int, {nullable:false})
    usersOnChatRoom?: number;
}
