import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MessageUncheckedCreateNestedManyWithoutChatRoomInput } from '../message/message-unchecked-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedCreateWithoutUsersOnChatRoomInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => MessageUncheckedCreateNestedManyWithoutChatRoomInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutChatRoomInput;
}
