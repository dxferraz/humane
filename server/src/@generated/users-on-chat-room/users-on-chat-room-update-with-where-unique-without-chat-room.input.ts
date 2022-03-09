import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomUpdateWithoutChatRoomInput } from './users-on-chat-room-update-without-chat-room.input';

@InputType()
export class UsersOnChatRoomUpdateWithWhereUniqueWithoutChatRoomInput {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutChatRoomInput, {nullable:false})
    data!: UsersOnChatRoomUpdateWithoutChatRoomInput;
}
