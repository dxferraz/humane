import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateManyCategoryInput } from './donation-create-many-category.input';

@InputType()
export class DonationCreateManyCategoryInputEnvelope {

    @Field(() => [DonationCreateManyCategoryInput], {nullable:false})
    data!: Array<DonationCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
