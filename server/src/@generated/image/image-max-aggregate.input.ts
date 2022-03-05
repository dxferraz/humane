import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    url?: true;

    @Field(() => Boolean, { nullable: true })
    missingPersonId?: true;
}
