import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';

@InputType()
export class ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput {

    @Field(() => ChatRoomWhereUniqueInput, {nullable:false})
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, {nullable:false})
    create!: ChatRoomCreateWithoutUsersOnChatRoomInput;
}
