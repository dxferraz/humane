import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UsersOnChatRoomCountOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    chatRoomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    createdAt?: keyof typeof SortOrder;
}
