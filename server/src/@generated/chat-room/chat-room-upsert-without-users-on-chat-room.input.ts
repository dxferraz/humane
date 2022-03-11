import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomUpdateWithoutUsersOnChatRoomInput } from './chat-room-update-without-users-on-chat-room.input';
import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';

@InputType()
export class ChatRoomUpsertWithoutUsersOnChatRoomInput {

    @Field(() => ChatRoomUpdateWithoutUsersOnChatRoomInput, {nullable:false})
    update!: ChatRoomUpdateWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, {nullable:false})
    create!: ChatRoomCreateWithoutUsersOnChatRoomInput;
}
