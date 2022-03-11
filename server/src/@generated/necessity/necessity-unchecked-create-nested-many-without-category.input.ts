import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutCategoryInput } from './necessity-create-without-category.input';
import { NecessityCreateOrConnectWithoutCategoryInput } from './necessity-create-or-connect-without-category.input';
import { NecessityCreateManyCategoryInputEnvelope } from './necessity-create-many-category-input-envelope.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';

@InputType()
export class NecessityUncheckedCreateNestedManyWithoutCategoryInput {

    @Field(() => [NecessityCreateWithoutCategoryInput], {nullable:true})
    create?: Array<NecessityCreateWithoutCategoryInput>;

    @Field(() => [NecessityCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<NecessityCreateOrConnectWithoutCategoryInput>;

    @Field(() => NecessityCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: NecessityCreateManyCategoryInputEnvelope;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    connect?: Array<NecessityWhereUniqueInput>;
}
