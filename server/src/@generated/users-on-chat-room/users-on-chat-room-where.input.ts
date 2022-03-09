import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ChatRoomRelationFilter } from '../chat-room/chat-room-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsersOnChatRoomWhereInput {

    @Field(() => [UsersOnChatRoomWhereInput], {nullable:true})
    AND?: Array<UsersOnChatRoomWhereInput>;

    @Field(() => [UsersOnChatRoomWhereInput], {nullable:true})
    OR?: Array<UsersOnChatRoomWhereInput>;

    @Field(() => [UsersOnChatRoomWhereInput], {nullable:true})
    NOT?: Array<UsersOnChatRoomWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => ChatRoomRelationFilter, {nullable:true})
    chatRoom?: ChatRoomRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    chatRoomId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
