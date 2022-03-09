import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageCountOrderByAggregateInput } from './image-count-order-by-aggregate.input';
import { ImageAvgOrderByAggregateInput } from './image-avg-order-by-aggregate.input';
import { ImageMaxOrderByAggregateInput } from './image-max-order-by-aggregate.input';
import { ImageMinOrderByAggregateInput } from './image-min-order-by-aggregate.input';
import { ImageSumOrderByAggregateInput } from './image-sum-order-by-aggregate.input';

@InputType()
export class ImageOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    missingPersonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    donationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    necessityId?: keyof typeof SortOrder;

    @Field(() => ImageCountOrderByAggregateInput, {nullable:true})
    _count?: ImageCountOrderByAggregateInput;

    @Field(() => ImageAvgOrderByAggregateInput, {nullable:true})
    _avg?: ImageAvgOrderByAggregateInput;

    @Field(() => ImageMaxOrderByAggregateInput, {nullable:true})
    _max?: ImageMaxOrderByAggregateInput;

    @Field(() => ImageMinOrderByAggregateInput, {nullable:true})
    _min?: ImageMinOrderByAggregateInput;

    @Field(() => ImageSumOrderByAggregateInput, {nullable:true})
    _sum?: ImageSumOrderByAggregateInput;
}
