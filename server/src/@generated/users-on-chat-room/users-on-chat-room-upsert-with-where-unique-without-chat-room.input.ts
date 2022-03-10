import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomUpdateWithoutChatRoomInput } from './users-on-chat-room-update-without-chat-room.input';
import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';

@InputType()
export class UsersOnChatRoomUpsertWithWhereUniqueWithoutChatRoomInput {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutChatRoomInput, {nullable:false})
    update!: UsersOnChatRoomUpdateWithoutChatRoomInput;

    @Field(() => UsersOnChatRoomCreateWithoutChatRoomInput, {nullable:false})
    create!: UsersOnChatRoomCreateWithoutChatRoomInput;
}
