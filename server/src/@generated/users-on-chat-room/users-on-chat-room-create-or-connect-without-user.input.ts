import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomCreateWithoutUserInput } from './users-on-chat-room-create-without-user.input';

@InputType()
export class UsersOnChatRoomCreateOrConnectWithoutUserInput {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomCreateWithoutUserInput, {nullable:false})
    create!: UsersOnChatRoomCreateWithoutUserInput;
}
