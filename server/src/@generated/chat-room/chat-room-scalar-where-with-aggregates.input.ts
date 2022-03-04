import { Field, InputType } from '@nestjs/graphql';

import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ChatRoomScalarWhereWithAggregatesInput {
    @Field(() => [ChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<ChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => [ChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<ChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => [ChatRoomScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<ChatRoomScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    id?: IntWithAggregatesFilter;
}
