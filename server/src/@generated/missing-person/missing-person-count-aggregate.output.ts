import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MissingPersonCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    name!: number;

    @Field(() => Int, { nullable: false })
    age!: number;

    @Field(() => Int, { nullable: false })
    height!: number;

    @Field(() => Int, { nullable: false })
    skin!: number;

    @Field(() => Int, { nullable: false })
    description!: number;

    @Field(() => Int, { nullable: false })
    reporterId!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
