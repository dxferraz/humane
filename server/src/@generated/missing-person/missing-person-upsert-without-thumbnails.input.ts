import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonUpdateWithoutThumbnailsInput } from './missing-person-update-without-thumbnails.input';
import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';

@InputType()
export class MissingPersonUpsertWithoutThumbnailsInput {

    @Field(() => MissingPersonUpdateWithoutThumbnailsInput, {nullable:false})
    update!: MissingPersonUpdateWithoutThumbnailsInput;

    @Field(() => MissingPersonCreateWithoutThumbnailsInput, {nullable:false})
    create!: MissingPersonCreateWithoutThumbnailsInput;
}
