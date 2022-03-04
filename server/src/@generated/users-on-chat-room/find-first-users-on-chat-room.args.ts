import { ArgsType, Field, Int } from '@nestjs/graphql';

import { UsersOnChatRoomOrderByWithRelationInput } from './users-on-chat-room-order-by-with-relation.input';
import { UsersOnChatRoomScalarFieldEnum } from './users-on-chat-room-scalar-field.enum';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';

@ArgsType()
export class FindFirstUsersOnChatRoomArgs {
    @Field(() => UsersOnChatRoomWhereInput, { nullable: true })
    where?: UsersOnChatRoomWhereInput;

    @Field(() => [UsersOnChatRoomOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<UsersOnChatRoomOrderByWithRelationInput>;

    @Field(() => UsersOnChatRoomWhereUniqueInput, { nullable: true })
    cursor?: UsersOnChatRoomWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [UsersOnChatRoomScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof UsersOnChatRoomScalarFieldEnum>;
}
