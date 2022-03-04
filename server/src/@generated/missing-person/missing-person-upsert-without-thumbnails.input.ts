import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';
import { MissingPersonUpdateWithoutThumbnailsInput } from './missing-person-update-without-thumbnails.input';

@InputType()
export class MissingPersonUpsertWithoutThumbnailsInput {
    @Field(() => MissingPersonUpdateWithoutThumbnailsInput, { nullable: false })
    update!: MissingPersonUpdateWithoutThumbnailsInput;

    @Field(() => MissingPersonCreateWithoutThumbnailsInput, { nullable: false })
    create!: MissingPersonCreateWithoutThumbnailsInput;
}
