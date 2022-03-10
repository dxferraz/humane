import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUsersOnChatRoomInput } from '../user/user-update-one-required-without-users-on-chat-room.input';

@InputType()
export class UsersOnChatRoomUpdateWithoutChatRoomInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutUsersOnChatRoomInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUsersOnChatRoomInput;
}
