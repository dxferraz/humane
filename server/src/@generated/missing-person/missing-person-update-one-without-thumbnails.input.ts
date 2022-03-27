import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';
import { MissingPersonCreateOrConnectWithoutThumbnailsInput } from './missing-person-create-or-connect-without-thumbnails.input';
import { MissingPersonUpsertWithoutThumbnailsInput } from './missing-person-upsert-without-thumbnails.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonUpdateWithoutThumbnailsInput } from './missing-person-update-without-thumbnails.input';

@InputType()
export class MissingPersonUpdateOneWithoutThumbnailsInput {

    @Field(() => MissingPersonCreateWithoutThumbnailsInput, {nullable:true})
    create?: MissingPersonCreateWithoutThumbnailsInput;

    @Field(() => MissingPersonCreateOrConnectWithoutThumbnailsInput, {nullable:true})
    connectOrCreate?: MissingPersonCreateOrConnectWithoutThumbnailsInput;

    @Field(() => MissingPersonUpsertWithoutThumbnailsInput, {nullable:true})
    upsert?: MissingPersonUpsertWithoutThumbnailsInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => MissingPersonWhereUniqueInput, {nullable:true})
    connect?: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonUpdateWithoutThumbnailsInput, {nullable:true})
    update?: MissingPersonUpdateWithoutThumbnailsInput;
}
