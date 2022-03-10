import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonUpdateOneWithoutThumbnailsInput } from '../missing-person/missing-person-update-one-without-thumbnails.input';
import { NecessityUpdateOneWithoutThumbnailsInput } from '../necessity/necessity-update-one-without-thumbnails.input';

@InputType()
export class ImageUpdateWithoutDonationInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => MissingPersonUpdateOneWithoutThumbnailsInput, {nullable:true})
    MissingPerson?: MissingPersonUpdateOneWithoutThumbnailsInput;

    @Field(() => NecessityUpdateOneWithoutThumbnailsInput, {nullable:true})
    Necessity?: NecessityUpdateOneWithoutThumbnailsInput;
}
