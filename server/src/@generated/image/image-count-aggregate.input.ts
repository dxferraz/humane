import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    url?: true;

    @Field(() => Boolean, {nullable:true})
    missingPersonId?: true;

    @Field(() => Boolean, {nullable:true})
    donationId?: true;

    @Field(() => Boolean, {nullable:true})
    necessityId?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
