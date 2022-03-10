import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonUpdateOneWithoutThumbnailsInput } from '../missing-person/missing-person-update-one-without-thumbnails.input';
import { DonationUpdateOneWithoutThumbnailsInput } from '../donation/donation-update-one-without-thumbnails.input';

@InputType()
export class ImageUpdateWithoutNecessityInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => MissingPersonUpdateOneWithoutThumbnailsInput, {nullable:true})
    MissingPerson?: MissingPersonUpdateOneWithoutThumbnailsInput;

    @Field(() => DonationUpdateOneWithoutThumbnailsInput, {nullable:true})
    Donation?: DonationUpdateOneWithoutThumbnailsInput;
}
