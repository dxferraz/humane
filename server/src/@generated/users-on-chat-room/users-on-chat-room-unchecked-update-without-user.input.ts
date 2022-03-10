import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedUpdateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    chatRoomId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
