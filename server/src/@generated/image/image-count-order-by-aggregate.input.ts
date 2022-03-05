import { Field, InputType } from '@nestjs/graphql';

import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImageCountOrderByAggregateInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    missingPersonId?: keyof typeof SortOrder;
}
