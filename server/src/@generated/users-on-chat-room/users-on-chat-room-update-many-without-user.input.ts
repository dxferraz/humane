import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomCreateWithoutUserInput } from './users-on-chat-room-create-without-user.input';
import { UsersOnChatRoomCreateOrConnectWithoutUserInput } from './users-on-chat-room-create-or-connect-without-user.input';
import { UsersOnChatRoomUpsertWithWhereUniqueWithoutUserInput } from './users-on-chat-room-upsert-with-where-unique-without-user.input';
import { UsersOnChatRoomCreateManyUserInputEnvelope } from './users-on-chat-room-create-many-user-input-envelope.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomUpdateWithWhereUniqueWithoutUserInput } from './users-on-chat-room-update-with-where-unique-without-user.input';
import { UsersOnChatRoomUpdateManyWithWhereWithoutUserInput } from './users-on-chat-room-update-many-with-where-without-user.input';
import { UsersOnChatRoomScalarWhereInput } from './users-on-chat-room-scalar-where.input';

@InputType()
export class UsersOnChatRoomUpdateManyWithoutUserInput {

    @Field(() => [UsersOnChatRoomCreateWithoutUserInput], {nullable:true})
    create?: Array<UsersOnChatRoomCreateWithoutUserInput>;

    @Field(() => [UsersOnChatRoomCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<UsersOnChatRoomCreateOrConnectWithoutUserInput>;

    @Field(() => [UsersOnChatRoomUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<UsersOnChatRoomUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UsersOnChatRoomCreateManyUserInputEnvelope, {nullable:true})
    createMany?: UsersOnChatRoomCreateManyUserInputEnvelope;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    connect?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    set?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    disconnect?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], {nullable:true})
    delete?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<UsersOnChatRoomUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UsersOnChatRoomUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<UsersOnChatRoomUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UsersOnChatRoomScalarWhereInput], {nullable:true})
    deleteMany?: Array<UsersOnChatRoomScalarWhereInput>;
}
