import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { ImageCreateInput } from './image-create.input';
import { ImageUpdateInput } from './image-update.input';

@ArgsType()
export class UpsertOneImageArgs {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateInput, {nullable:false})
    create!: ImageCreateInput;

    @Field(() => ImageUpdateInput, {nullable:false})
    update!: ImageUpdateInput;
}
