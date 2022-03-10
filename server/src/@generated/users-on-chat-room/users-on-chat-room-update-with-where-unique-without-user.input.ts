import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomUpdateWithoutUserInput } from './users-on-chat-room-update-without-user.input';

@InputType()
export class UsersOnChatRoomUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomUpdateWithoutUserInput, {nullable:false})
    data!: UsersOnChatRoomUpdateWithoutUserInput;
}
