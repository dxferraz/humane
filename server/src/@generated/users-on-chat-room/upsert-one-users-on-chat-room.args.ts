import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereUniqueInput } from './users-on-chat-room-where-unique.input';
import { UsersOnChatRoomCreateInput } from './users-on-chat-room-create.input';
import { UsersOnChatRoomUpdateInput } from './users-on-chat-room-update.input';

@ArgsType()
export class UpsertOneUsersOnChatRoomArgs {

    @Field(() => UsersOnChatRoomWhereUniqueInput, {nullable:false})
    where!: UsersOnChatRoomWhereUniqueInput;

    @Field(() => UsersOnChatRoomCreateInput, {nullable:false})
    create!: UsersOnChatRoomCreateInput;

    @Field(() => UsersOnChatRoomUpdateInput, {nullable:false})
    update!: UsersOnChatRoomUpdateInput;
}
