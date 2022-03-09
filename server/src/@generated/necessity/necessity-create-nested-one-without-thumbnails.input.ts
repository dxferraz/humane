import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutThumbnailsInput } from './necessity-create-without-thumbnails.input';
import { NecessityCreateOrConnectWithoutThumbnailsInput } from './necessity-create-or-connect-without-thumbnails.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';

@InputType()
export class NecessityCreateNestedOneWithoutThumbnailsInput {

    @Field(() => NecessityCreateWithoutThumbnailsInput, {nullable:true})
    create?: NecessityCreateWithoutThumbnailsInput;

    @Field(() => NecessityCreateOrConnectWithoutThumbnailsInput, {nullable:true})
    connectOrCreate?: NecessityCreateOrConnectWithoutThumbnailsInput;

    @Field(() => NecessityWhereUniqueInput, {nullable:true})
    connect?: NecessityWhereUniqueInput;
}
