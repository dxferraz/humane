import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithoutCategoryInput } from './necessity-update-without-category.input';

@InputType()
export class NecessityUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityUpdateWithoutCategoryInput, {nullable:false})
    data!: NecessityUpdateWithoutCategoryInput;
}
