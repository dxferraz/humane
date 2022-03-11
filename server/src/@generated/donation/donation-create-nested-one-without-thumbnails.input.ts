import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutThumbnailsInput } from './donation-create-without-thumbnails.input';
import { DonationCreateOrConnectWithoutThumbnailsInput } from './donation-create-or-connect-without-thumbnails.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';

@InputType()
export class DonationCreateNestedOneWithoutThumbnailsInput {

    @Field(() => DonationCreateWithoutThumbnailsInput, {nullable:true})
    create?: DonationCreateWithoutThumbnailsInput;

    @Field(() => DonationCreateOrConnectWithoutThumbnailsInput, {nullable:true})
    connectOrCreate?: DonationCreateOrConnectWithoutThumbnailsInput;

    @Field(() => DonationWhereUniqueInput, {nullable:true})
    connect?: DonationWhereUniqueInput;
}
