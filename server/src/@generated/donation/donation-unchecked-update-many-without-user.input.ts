import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutUserInput } from './donation-create-without-user.input';
import { DonationCreateOrConnectWithoutUserInput } from './donation-create-or-connect-without-user.input';
import { DonationUpsertWithWhereUniqueWithoutUserInput } from './donation-upsert-with-where-unique-without-user.input';
import { DonationCreateManyUserInputEnvelope } from './donation-create-many-user-input-envelope.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithWhereUniqueWithoutUserInput } from './donation-update-with-where-unique-without-user.input';
import { DonationUpdateManyWithWhereWithoutUserInput } from './donation-update-many-with-where-without-user.input';
import { DonationScalarWhereInput } from './donation-scalar-where.input';

@InputType()
export class DonationUncheckedUpdateManyWithoutUserInput {

    @Field(() => [DonationCreateWithoutUserInput], {nullable:true})
    create?: Array<DonationCreateWithoutUserInput>;

    @Field(() => [DonationCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<DonationCreateOrConnectWithoutUserInput>;

    @Field(() => [DonationUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<DonationUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DonationCreateManyUserInputEnvelope, {nullable:true})
    createMany?: DonationCreateManyUserInputEnvelope;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    connect?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    set?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    disconnect?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    delete?: Array<DonationWhereUniqueInput>;

    @Field(() => [DonationUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<DonationUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DonationUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<DonationUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DonationScalarWhereInput], {nullable:true})
    deleteMany?: Array<DonationScalarWhereInput>;
}
