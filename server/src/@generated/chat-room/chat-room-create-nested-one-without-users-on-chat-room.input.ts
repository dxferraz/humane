import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';
import { ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput } from './chat-room-create-or-connect-without-users-on-chat-room.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@InputType()
export class ChatRoomCreateNestedOneWithoutUsersOnChatRoomInput {

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, {nullable:true})
    create?: ChatRoomCreateWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput, {nullable:true})
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    connect?: ChatRoomWhereUniqueInput;
}
