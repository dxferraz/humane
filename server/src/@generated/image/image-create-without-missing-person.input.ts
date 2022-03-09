import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateNestedOneWithoutThumbnailsInput } from '../donation/donation-create-nested-one-without-thumbnails.input';
import { NecessityCreateNestedOneWithoutThumbnailsInput } from '../necessity/necessity-create-nested-one-without-thumbnails.input';

@InputType()
export class ImageCreateWithoutMissingPersonInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => DonationCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    Donation?: DonationCreateNestedOneWithoutThumbnailsInput;

    @Field(() => NecessityCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    Necessity?: NecessityCreateNestedOneWithoutThumbnailsInput;
}
