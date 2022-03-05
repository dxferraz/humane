import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ImageAvgAggregate } from './image-avg-aggregate.output';
import { ImageCountAggregate } from './image-count-aggregate.output';
import { ImageMaxAggregate } from './image-max-aggregate.output';
import { ImageMinAggregate } from './image-min-aggregate.output';
import { ImageSumAggregate } from './image-sum-aggregate.output';

@ObjectType()
export class ImageGroupBy {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    url!: string;

    @Field(() => Int, { nullable: true })
    missingPersonId?: number;

    @Field(() => ImageCountAggregate, { nullable: true })
    _count?: ImageCountAggregate;

    @Field(() => ImageAvgAggregate, { nullable: true })
    _avg?: ImageAvgAggregate;

    @Field(() => ImageSumAggregate, { nullable: true })
    _sum?: ImageSumAggregate;

    @Field(() => ImageMinAggregate, { nullable: true })
    _min?: ImageMinAggregate;

    @Field(() => ImageMaxAggregate, { nullable: true })
    _max?: ImageMaxAggregate;
}
