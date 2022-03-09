import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';
import { UsersOnChatRoomCreateOrConnectWithoutChatRoomInput } from './users-on-chat-room-create-or-connect-without-chat-room.input';
import { UsersOnChatRoomCreateManyChatRoomInputEnvelope } from './users-on-chat-room-create-many-chat-room-input-envelope.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomCreateNestedManyWithoutChatRoomInput {

    @Field(() => [UsersOnChatRoomCreateWithoutChatRoomInput], {nullable:true})
    create?: Array<UsersOnChatRoomCreateWithoutChatRoomInput>;

    @Field(() => [UsersOnChatRoomCreateOrConnectWithoutChatRoomInput], {nullable:true})
    connectOrCreate?: Array<UsersOnChatRoomCreateOrConnectWithoutChatRoomInput>;

    @Field(() => UsersOnChatRoomCreateManyChatRoomInputEnvelope, {nullable:true})
    createMany?: UsersOnChatRoomCreateManyChatRoomInputEnvelope;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnChatRoomWhereUniqueInput>;
}
