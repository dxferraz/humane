import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutThumbnailsInput } from './necessity-create-without-thumbnails.input';
import { NecessityCreateOrConnectWithoutThumbnailsInput } from './necessity-create-or-connect-without-thumbnails.input';
import { NecessityUpsertWithoutThumbnailsInput } from './necessity-upsert-without-thumbnails.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithoutThumbnailsInput } from './necessity-update-without-thumbnails.input';

@InputType()
export class NecessityUpdateOneWithoutThumbnailsInput {

    @Field(() => NecessityCreateWithoutThumbnailsInput, {nullable:true})
    create?: NecessityCreateWithoutThumbnailsInput;

    @Field(() => NecessityCreateOrConnectWithoutThumbnailsInput, {nullable:true})
    connectOrCreate?: NecessityCreateOrConnectWithoutThumbnailsInput;

    @Field(() => NecessityUpsertWithoutThumbnailsInput, {nullable:true})
    upsert?: NecessityUpsertWithoutThumbnailsInput;

    @Field(() => NecessityWhereUniqueInput, {nullable:true})
    connect?: NecessityWhereUniqueInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => NecessityUpdateWithoutThumbnailsInput, {nullable:true})
    update?: NecessityUpdateWithoutThumbnailsInput;
}
