import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';

@InputType()
export class UsersOnChatRoomListRelationFilter {

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    every?: UsersOnChatRoomWhereInput;

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    some?: UsersOnChatRoomWhereInput;

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    none?: UsersOnChatRoomWhereInput;
}
