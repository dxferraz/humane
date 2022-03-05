import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    missingPersonId?: true;
}
