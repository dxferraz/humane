import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';
import { UsersOnChatRoomOrderByWithRelationInput } from './users-on-chat-room-order-by-with-relation.input';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersOnChatRoomScalarFieldEnum } from './users-on-chat-room-scalar-field.enum';

@ArgsType()
export class FindFirstUsersOnChatRoomArgs {

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    where?: UsersOnChatRoomWhereInput;

    @Field(() => [UsersOnChatRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOnChatRoomOrderByWithRelationInput>;

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:true})
    cursor?: UsersOnChatRoomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [UsersOnChatRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UsersOnChatRoomScalarFieldEnum>;
}
