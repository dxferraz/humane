import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateOrConnectWithoutThumbnailsInput } from './missing-person-create-or-connect-without-thumbnails.input';
import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonCreateNestedOneWithoutThumbnailsInput {
    @Field(() => MissingPersonCreateWithoutThumbnailsInput, { nullable: true })
    create?: MissingPersonCreateWithoutThumbnailsInput;

    @Field(() => MissingPersonCreateOrConnectWithoutThumbnailsInput, { nullable: true })
    connectOrCreate?: MissingPersonCreateOrConnectWithoutThumbnailsInput;

    @Field(() => MissingPersonWhereUniqueInput, { nullable: true })
    connect?: MissingPersonWhereUniqueInput;
}
