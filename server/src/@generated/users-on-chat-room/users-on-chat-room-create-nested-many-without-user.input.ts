import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomCreateWithoutUserInput } from './users-on-chat-room-create-without-user.input';
import { UsersOnChatRoomCreateOrConnectWithoutUserInput } from './users-on-chat-room-create-or-connect-without-user.input';
import { UsersOnChatRoomCreateManyUserInputEnvelope } from './users-on-chat-room-create-many-user-input-envelope.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomCreateNestedManyWithoutUserInput {

    @Field(() => [UsersOnChatRoomCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersOnChatRoomCreateWithoutUserInput>;

    @Field(() => [UsersOnChatRoomCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersOnChatRoomCreateOrConnectWithoutUserInput>;

    @Field(() => UsersOnChatRoomCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersOnChatRoomCreateManyUserInputEnvelope;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnChatRoomWhereUniqueInput>;
}
