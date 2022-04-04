import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../user/user-update-one-required-without-users-on-chat-room.input';
import { ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../chat-room/chat-room-update-one-required-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutUsersOnChatRoomInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput, {nullable:true})
    chatRoom?: ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
