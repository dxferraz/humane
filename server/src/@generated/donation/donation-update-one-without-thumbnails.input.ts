import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DonationCreateWithoutThumbnailsInput } from './donation-create-without-thumbnails.input';
import { DonationCreateOrConnectWithoutThumbnailsInput } from './donation-create-or-connect-without-thumbnails.input';
import { DonationUpsertWithoutThumbnailsInput } from './donation-upsert-without-thumbnails.input';
import { DonationWhereUniqueInput } from './donation-where-unique.input';
import { DonationUpdateWithoutThumbnailsInput } from './donation-update-without-thumbnails.input';

@InputType()
export class DonationUpdateOneWithoutThumbnailsInput {

    @Field(() => DonationCreateWithoutThumbnailsInput, {nullable:true})
    create?: DonationCreateWithoutThumbnailsInput;

    @Field(() => DonationCreateOrConnectWithoutThumbnailsInput, {nullable:true})
    connectOrCreate?: DonationCreateOrConnectWithoutThumbnailsInput;

    @Field(() => DonationUpsertWithoutThumbnailsInput, {nullable:true})
    upsert?: DonationUpsertWithoutThumbnailsInput;

    @Field(() => DonationWhereUniqueInput, {nullable:true})
    connect?: DonationWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => DonationUpdateWithoutThumbnailsInput, {nullable:true})
    update?: DonationUpdateWithoutThumbnailsInput;
}
