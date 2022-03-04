import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MessageAvgOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    chatRoomId?: keyof typeof SortOrder;
}