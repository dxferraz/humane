import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonCreateNestedOneWithoutThumbnailsInput } from '../missing-person/missing-person-create-nested-one-without-thumbnails.input';
import { DonationCreateNestedOneWithoutThumbnailsInput } from '../donation/donation-create-nested-one-without-thumbnails.input';

@InputType()
export class ImageCreateWithoutNecessityInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => MissingPersonCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    MissingPerson?: MissingPersonCreateNestedOneWithoutThumbnailsInput;

    @Field(() => DonationCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    Donation?: DonationCreateNestedOneWithoutThumbnailsInput;
}
