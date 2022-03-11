import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityCreateWithoutCategoryInput } from './necessity-create-without-category.input';

@InputType()
export class NecessityCreateOrConnectWithoutCategoryInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityCreateWithoutCategoryInput, {nullable:false})
    create!: NecessityCreateWithoutCategoryInput;
}
