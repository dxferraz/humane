import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationUpdateOneWithoutThumbnailsInput } from '../donation/donation-update-one-without-thumbnails.input';
import { NecessityUpdateOneWithoutThumbnailsInput } from '../necessity/necessity-update-one-without-thumbnails.input';

@InputType()
export class ImageUpdateWithoutMissingPersonInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => DonationUpdateOneWithoutThumbnailsInput, {nullable:true})
    Donation?: DonationUpdateOneWithoutThumbnailsInput;

    @Field(() => NecessityUpdateOneWithoutThumbnailsInput, {nullable:true})
    Necessity?: NecessityUpdateOneWithoutThumbnailsInput;
}
