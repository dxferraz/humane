import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MissingPersonCountOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    skin?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    reporterId?: keyof typeof SortOrder;
}
