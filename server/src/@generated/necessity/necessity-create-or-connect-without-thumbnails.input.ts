import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityCreateWithoutThumbnailsInput } from './necessity-create-without-thumbnails.input';

@InputType()
export class NecessityCreateOrConnectWithoutThumbnailsInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityCreateWithoutThumbnailsInput, {nullable:false})
    create!: NecessityCreateWithoutThumbnailsInput;
}
