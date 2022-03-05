import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonCreateOrConnectWithoutThumbnailsInput {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateWithoutThumbnailsInput, { nullable: false })
    create!: MissingPersonCreateWithoutThumbnailsInput;
}
