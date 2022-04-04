import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../chat-room/chat-room-update-one-required-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomUpdateWithoutUserInput {

    @Field(() => ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput, {nullable:true})
    chatRoom?: ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
