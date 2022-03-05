import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MissingPersonMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;

    @Field(() => Boolean, { nullable: true })
    age?: true;

    @Field(() => Boolean, { nullable: true })
    height?: true;

    @Field(() => Boolean, { nullable: true })
    skin?: true;

    @Field(() => Boolean, { nullable: true })
    description?: true;

    @Field(() => Boolean, { nullable: true })
    reporterId?: true;
}
