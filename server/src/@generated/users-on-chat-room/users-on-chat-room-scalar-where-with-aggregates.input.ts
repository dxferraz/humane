import { Field, InputType } from '@nestjs/graphql';

import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class UsersOnChatRoomScalarWhereWithAggregatesInput {
    @Field(() => [UsersOnChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<UsersOnChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => [UsersOnChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<UsersOnChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => [UsersOnChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<UsersOnChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    chatRoomId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    createdAt?: DateTimeWithAggregatesFilter;
}
