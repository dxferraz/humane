import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationUpdateWithoutThumbnailsInput } from './donation-update-without-thumbnails.input';
import { DonationCreateWithoutThumbnailsInput } from './donation-create-without-thumbnails.input';

@InputType()
export class DonationUpsertWithoutThumbnailsInput {

    @Field(() => DonationUpdateWithoutThumbnailsInput, {nullable:false})
    update!: DonationUpdateWithoutThumbnailsInput;

    @Field(() => DonationCreateWithoutThumbnailsInput, {nullable:false})
    create!: DonationCreateWithoutThumbnailsInput;
}
