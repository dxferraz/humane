import { Field, InputType } from '@nestjs/graphql';

import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class MissingPersonOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => ImageOrderByRelationAggregateInput, { nullable: true })
    thumbnails?: ImageOrderByRelationAggregateInput;

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

    @Field(() => UserOrderByWithRelationInput, { nullable: true })
    reporter?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, { nullable: true })
    reporterId?: keyof typeof SortOrder;
}
