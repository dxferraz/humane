import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomRelationFilter } from '../chat-room/chat-room-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class MessageWhereInput {
    @Field(() => [MessageWhereInput], { nullable: true })
    AND?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], { nullable: true })
    OR?: Array<MessageWhereInput>;

    @Field(() => [MessageWhereInput], { nullable: true })
    NOT?: Array<MessageWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    message?: StringFilter;

    @Field(() => DateTimeFilter, { nullable: true })
    timeStamp?: DateTimeFilter;

    @Field(() => UserRelationFilter, { nullable: true })
    author?: UserRelationFilter;

    @Field(() => IntFilter, { nullable: true })
    authorId?: IntFilter;

    @Field(() => ChatRoomRelationFilter, { nullable: true })
    chatRoom?: ChatRoomRelationFilter;

    @Field(() => IntFilter, { nullable: true })
    chatRoomId?: IntFilter;
}
