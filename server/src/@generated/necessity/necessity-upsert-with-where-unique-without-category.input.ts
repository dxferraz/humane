import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithoutCategoryInput } from './necessity-update-without-category.input';
import { NecessityCreateWithoutCategoryInput } from './necessity-create-without-category.input';

@InputType()
export class NecessityUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityUpdateWithoutCategoryInput, {nullable:false})
    update!: NecessityUpdateWithoutCategoryInput;

    @Field(() => NecessityCreateWithoutCategoryInput, {nullable:false})
    create!: NecessityCreateWithoutCategoryInput;
}
