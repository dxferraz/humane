import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyDonationInput } from './image-create-many-donation.input';

@InputType()
export class ImageCreateManyDonationInputEnvelope {

    @Field(() => [ImageCreateManyDonationInput], {nullable:false})
    data!: Array<ImageCreateManyDonationInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
