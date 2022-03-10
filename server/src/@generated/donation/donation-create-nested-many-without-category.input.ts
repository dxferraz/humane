import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutCategoryInput } from './donation-create-without-category.input';
import { DonationCreateOrConnectWithoutCategoryInput } from './donation-create-or-connect-without-category.input';
import { DonationCreateManyCategoryInputEnvelope } from './donation-create-many-category-input-envelope.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@InputType()
export class DonationCreateNestedManyWithoutCategoryInput {

    @Field(() => [DonationCreateWithoutCategoryInput], {nullable:true})
    create?: Array<DonationCreateWithoutCategoryInput>;

    @Field(() => [DonationCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<DonationCreateOrConnectWithoutCategoryInput>;

    @Field(() => DonationCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: DonationCreateManyCategoryInputEnvelope;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    connect?: Array<DonationWhereUniqueInput>;
}
