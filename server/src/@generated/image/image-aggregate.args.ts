import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ImageAvgAggregateInput } from './image-avg-aggregate.input';
import { ImageCountAggregateInput } from './image-count-aggregate.input';
import { ImageMaxAggregateInput } from './image-max-aggregate.input';
import { ImageMinAggregateInput } from './image-min-aggregate.input';
import { ImageOrderByWithRelationInput } from './image-order-by-with-relation.input';
import { ImageSumAggregateInput } from './image-sum-aggregate.input';
import { ImageWhereInput } from './image-where.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class ImageAggregateArgs {
    @Field(() => ImageWhereInput, { nullable: true })
    where?: ImageWhereInput;

    @Field(() => [ImageOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ImageOrderByWithRelationInput>;

    @Field(() => ImageWhereUniqueInput, { nullable: true })
    cursor?: ImageWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => ImageCountAggregateInput, { nullable: true })
    _count?: ImageCountAggregateInput;

    @Field(() => ImageAvgAggregateInput, { nullable: true })
    _avg?: ImageAvgAggregateInput;

    @Field(() => ImageSumAggregateInput, { nullable: true })
    _sum?: ImageSumAggregateInput;

    @Field(() => ImageMinAggregateInput, { nullable: true })
    _min?: ImageMinAggregateInput;

    @Field(() => ImageMaxAggregateInput, { nullable: true })
    _max?: ImageMaxAggregateInput;
}
