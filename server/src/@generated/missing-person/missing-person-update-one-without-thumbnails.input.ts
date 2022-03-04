import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateOrConnectWithoutThumbnailsInput } from './missing-person-create-or-connect-without-thumbnails.input';
import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';
import { MissingPersonUpdateWithoutThumbnailsInput } from './missing-person-update-without-thumbnails.input';
import { MissingPersonUpsertWithoutThumbnailsInput } from './missing-person-upsert-without-thumbnails.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonUpdateOneWithoutThumbnailsInput {
    @Field(() => MissingPersonCreateWithoutThumbnailsInput, { nullable: true })
    create?: MissingPersonCreateWithoutThumbnailsInput;

    @Field(() => MissingPersonCreateOrConnectWithoutThumbnailsInput, { nullable: true })
    connectOrCreate?: MissingPersonCreateOrConnectWithoutThumbnailsInput;

    @Field(() => MissingPersonUpsertWithoutThumbnailsInput, { nullable: true })
    upsert?: MissingPersonUpsertWithoutThumbnailsInput;

    @Field(() => MissingPersonWhereUniqueInput, { nullable: true })
    connect?: MissingPersonWhereUniqueInput;

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean;

    @Field(() => Boolean, { nullable: true })
    delete?: boolean;

    @Field(() => MissingPersonUpdateWithoutThumbnailsInput, { nullable: true })
    update?: MissingPersonUpdateWithoutThumbnailsInput;
}
