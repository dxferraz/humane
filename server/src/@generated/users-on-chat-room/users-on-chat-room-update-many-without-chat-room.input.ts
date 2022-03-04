import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomCreateManyChatRoomInputEnvelope } from './users-on-chat-room-create-many-chat-room-input-envelope.input';
import { UsersOnChatRoomCreateOrConnectWithoutChatRoomInput } from './users-on-chat-room-create-or-connect-without-chat-room.input';
import { UsersOnChatRoomCreateWithoutChatRoomInput } from './users-on-chat-room-create-without-chat-room.input';
import { UsersOnChatRoomScalarWhereInput } from './users-on-chat-room-scalar-where.input';
import { UsersOnChatRoomUpdateManyWithWhereWithoutChatRoomInput } from './users-on-chat-room-update-many-with-where-without-chat-room.input';
import { UsersOnChatRoomUpdateWithWhereUniqueWithoutChatRoomInput } from './users-on-chat-room-update-with-where-unique-without-chat-room.input';
import { UsersOnChatRoomUpsertWithWhereUniqueWithoutChatRoomInput } from './users-on-chat-room-upsert-with-where-unique-without-chat-room.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@InputType()
export class UsersOnChatRoomUpdateManyWithoutChatRoomInput {
    @Field(() => [UsersOnChatRoomCreateWithoutChatRoomInput], { nullable: true })
    create?: Array<UsersOnChatRoomCreateWithoutChatRoomInput>;

    @Field(() => [UsersOnChatRoomCreateOrConnectWithoutChatRoomInput], {
        nullable: true,
    })
    connectOrCreate?: Array<UsersOnChatRoomCreateOrConnectWithoutChatRoomInput>;

    @Field(() => [UsersOnChatRoomUpsertWithWhereUniqueWithoutChatRoomInput], {
        nullable: true,
    })
    upsert?: Array<UsersOnChatRoomUpsertWithWhereUniqueWithoutChatRoomInput>;

    @Field(() => UsersOnChatRoomCreateManyChatRoomInputEnvelope, { nullable: true })
    createMany?: UsersOnChatRoomCreateManyChatRoomInputEnvelope;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], { nullable: true })
    connect?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], { nullable: true })
    set?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], { nullable: true })
    disconnect?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomWhereUniqueInput], { nullable: true })
    delete?: Array<UsersOnChatRoomWhereUniqueInput>;

    @Field(() => [UsersOnChatRoomUpdateWithWhereUniqueWithoutChatRoomInput], {
        nullable: true,
    })
    update?: Array<UsersOnChatRoomUpdateWithWhereUniqueWithoutChatRoomInput>;

    @Field(() => [UsersOnChatRoomUpdateManyWithWhereWithoutChatRoomInput], {
        nullable: true,
    })
    updateMany?: Array<UsersOnChatRoomUpdateManyWithWhereWithoutChatRoomInput>;

    @Field(() => [UsersOnChatRoomScalarWhereInput], { nullable: true })
    deleteMany?: Array<UsersOnChatRoomScalarWhereInput>;
}
