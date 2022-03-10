import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput } from '../chat-room/chat-room-create-nested-one-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput, {nullable:false})
    chatRoom!: ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput;
}
