import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutUserInput } from './donation-create-without-user.input';
import { DonationCreateOrConnectWithoutUserInput } from './donation-create-or-connect-without-user.input';
import { DonationCreateManyUserInputEnvelope } from './donation-create-many-user-input-envelope.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@InputType()
export class DonationUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [DonationCreateWithoutUserInput], {nullable:true})
    create?: Array<DonationCreateWithoutUserInput>;

    @Field(() => [DonationCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<DonationCreateOrConnectWithoutUserInput>;

    @Field(() => DonationCreateManyUserInputEnvelope, {nullable:true})
    createMany?: DonationCreateManyUserInputEnvelope;

    @Field(() => [DonationWhereUniqueInput], {nullable:true})
    connect?: Array<DonationWhereUniqueInput>;
}
