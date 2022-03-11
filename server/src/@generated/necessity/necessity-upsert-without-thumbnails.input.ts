import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityUpdateWithoutThumbnailsInput } from './necessity-update-without-thumbnails.input';
import { NecessityCreateWithoutThumbnailsInput } from './necessity-create-without-thumbnails.input';

@InputType()
export class NecessityUpsertWithoutThumbnailsInput {

    @Field(() => NecessityUpdateWithoutThumbnailsInput, {nullable:false})
    update!: NecessityUpdateWithoutThumbnailsInput;

    @Field(() => NecessityCreateWithoutThumbnailsInput, {nullable:false})
    create!: NecessityCreateWithoutThumbnailsInput;
}
