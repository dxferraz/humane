import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonCreateWithoutThumbnailsInput } from './missing-person-create-without-thumbnails.input';

@InputType()
export class MissingPersonCreateOrConnectWithoutThumbnailsInput {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateWithoutThumbnailsInput, {nullable:false})
    create!: MissingPersonCreateWithoutThumbnailsInput;
}
