import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateNestedOneWithoutThumbnailsInput } from '../missing-person/missing-person-create-nested-one-without-thumbnails.input';

@InputType()
export class ImageCreateInput {
    @Field(() => String, { nullable: false })
    url!: string;

    @Field(() => MissingPersonCreateNestedOneWithoutThumbnailsInput, { nullable: true })
    MissingPerson?: MissingPersonCreateNestedOneWithoutThumbnailsInput;
}
