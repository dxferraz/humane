import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedUpdateManyInput {

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => Int, {nullable:true})
    chatRoomId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
