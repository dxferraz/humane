import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonCreateNestedOneWithoutThumbnailsInput } from '../missing-person/missing-person-create-nested-one-without-thumbnails.input';
import { NecessityCreateNestedOneWithoutThumbnailsInput } from '../necessity/necessity-create-nested-one-without-thumbnails.input';

@InputType()
export class ImageCreateWithoutDonationInput {

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => MissingPersonCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    MissingPerson?: MissingPersonCreateNestedOneWithoutThumbnailsInput;

    @Field(() => NecessityCreateNestedOneWithoutThumbnailsInput, {nullable:true})
    Necessity?: NecessityCreateNestedOneWithoutThumbnailsInput;
}
