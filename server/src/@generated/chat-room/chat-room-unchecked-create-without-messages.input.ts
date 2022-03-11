import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput } from '../users-on-chat-room/users-on-chat-room-unchecked-create-nested-many-without-chat-room.input';

@InputType()
export class ChatRoomUncheckedCreateWithoutMessagesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUncheckedCreateNestedManyWithoutChatRoomInput;
}
