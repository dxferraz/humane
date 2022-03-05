import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MissingPersonAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;

    @Field(() => Float, { nullable: true })
    age?: number;

    @Field(() => Float, { nullable: true })
    height?: number;

    @Field(() => Float, { nullable: true })
    reporterId?: number;
}
