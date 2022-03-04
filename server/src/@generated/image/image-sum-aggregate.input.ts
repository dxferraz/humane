import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    missingPersonId?: true;
}
