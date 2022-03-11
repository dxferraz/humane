import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationCreateWithoutThumbnailsInput } from './donation-create-without-thumbnails.input';

@InputType()
export class DonationCreateOrConnectWithoutThumbnailsInput {

    @Field(() => DonationWhereUniqueInput, {nullable:false})
    where!: DonationWhereUniqueInput;

    @Field(() => DonationCreateWithoutThumbnailsInput, {nullable:false})
    create!: DonationCreateWithoutThumbnailsInput;
}
