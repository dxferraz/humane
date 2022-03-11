import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';

@InputType()
export class UsersOnChatRoomCreateOrConnectWithoutChatRoomInput {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomCreateWithoutChatRoomInput, {nullable:false})
    create!: UsersOnChatRoomCreateWithoutChatRoomInput;
}
