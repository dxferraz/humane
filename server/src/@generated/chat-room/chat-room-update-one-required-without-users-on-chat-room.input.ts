import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomCreateWithoutUsersOnChatRoomInput } from './chat-room-create-without-users-on-chat-room.input';
import { ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput } from './chat-room-create-or-connect-without-users-on-chat-room.input';
import { ChatRoomUpsertWithoutUsersOnChatRoomInput } from './chat-room-upsert-without-users-on-chat-room.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { ChatRoomUpdateWithoutUsersOnChatRoomInput } from './chat-room-update-without-users-on-chat-room.input';

@InputType()
export class ChatRoomUpdateOneRequiredWithoutUsersOnChatRoomInput {

    @Field(() => ChatRoomCreateWithoutUsersOnChatRoomInput, {nullable:true})
    create?: ChatRoomCreateWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput, {nullable:true})
    connectOrCreate?: ChatRoomCreateOrConnectWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomUpsertWithoutUsersOnChatRoomInput, {nullable:true})
    upsert?: ChatRoomUpsertWithoutUsersOnChatRoomInput;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    connect?: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomUpdateWithoutUsersOnChatRoomInput, {nullable:true})
    update?: ChatRoomUpdateWithoutUsersOnChatRoomInput;
}
