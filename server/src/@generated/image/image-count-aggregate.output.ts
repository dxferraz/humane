import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    url!: number;

    @Field(() => Int, { nullable: false })
    missingPersonId!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
