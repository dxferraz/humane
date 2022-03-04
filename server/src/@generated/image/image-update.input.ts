import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonUpdateOneWithoutThumbnailsInput } from '../missing-person/missing-person-update-one-without-thumbnails.input';

@InputType()
export class ImageUpdateInput {
    @Field(() => String, { nullable: true })
    url?: string;

    @Field(() => MissingPersonUpdateOneWithoutThumbnailsInput, { nullable: true })
    MissingPerson?: MissingPersonUpdateOneWithoutThumbnailsInput;
}
