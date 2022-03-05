import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MissingPersonSumOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    reporterId?: keyof typeof SortOrder;
}
