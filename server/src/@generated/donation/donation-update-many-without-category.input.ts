import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutCategoryInput } from './donation-create-without-category.input';
import { DonationCreateOrConnectWithoutCategoryInput } from './donation-create-or-connect-without-category.input';
import { DonationUpsertWithWhereUniqueWithoutCategoryInput } from './donation-upsert-with-where-unique-without-category.input';
import { DonationCreateManyCategoryInputEnvelope } from './donation-create-many-category-input-envelope.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithWhereUniqueWithoutCategoryInput } from './donation-update-with-where-unique-without-category.input';
import { DonationUpdateManyWithWhereWithoutCategoryInput } from './donation-update-many-with-where-without-category.input';
import { DonationScalarWhereInput } from './donation-scalar-where.input';

@InputType()
export class DonationUpdateManyWithoutCategoryInput {

    @Field(() => [DonationCreateWithoutCategoryInput], {nullable:true})
    create?: Array<DonationCreateWithoutCategoryInput>;

    @Field(() => [DonationCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<DonationCreateOrConnectWithoutCategoryInput>;

    @Field(() => [DonationUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<DonationUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => DonationCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: DonationCreateManyCategoryInputEnvelope;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    connect?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    set?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    disconnect?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    delete?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<DonationUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [DonationUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<DonationUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [DonationScalarWhereInput], {nullable:true})
    deleteMany?: Array<DonationScalarWhereInput>;
}
