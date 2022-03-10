import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { UsersOnChatRoomListRelationFilter } from '../users-on-chat-room/users-on-chat-room-list-relation-filter.input';

@InputType()
export class ChatRoomWhereInput {

    @Field(() => [ChatRoomWhereInput], {nullable:true})
    AND?: Array<ChatRoomWhereInput>;

    @Field(() => [ChatRoomWhereInput], {nullable:true})
    OR?: Array<ChatRoomWhereInput>;

    @Field(() => [ChatRoomWhereInput], {nullable:true})
    NOT?: Array<ChatRoomWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => UsersOnChatRoomListRelationFilter, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomListRelationFilter;
}
