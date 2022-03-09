import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutCategoryInput } from './necessity-create-without-category.input';
import { NecessityCreateOrConnectWithoutCategoryInput } from './necessity-create-or-connect-without-category.input';
import { NecessityUpsertWithWhereUniqueWithoutCategoryInput } from './necessity-upsert-with-where-unique-without-category.input';
import { NecessityCreateManyCategoryInputEnvelope } from './necessity-create-many-category-input-envelope.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithWhereUniqueWithoutCategoryInput } from './necessity-update-with-where-unique-without-category.input';
import { NecessityUpdateManyWithWhereWithoutCategoryInput } from './necessity-update-many-with-where-without-category.input';
import { NecessityScalarWhereInput } from './necessity-scalar-where.input';

@InputType()
export class NecessityUncheckedUpdateManyWithoutCategoryInput {

    @Field(() => [NecessityCreateWithoutCategoryInput], {nullable:true})
    create?: Array<NecessityCreateWithoutCategoryInput>;

    @Field(() => [NecessityCreateOrConnectWithoutCategoryInput], {nullable:true})
    connectOrCreate?: Array<NecessityCreateOrConnectWithoutCategoryInput>;

    @Field(() => [NecessityUpsertWithWhereUniqueWithoutCategoryInput], {nullable:true})
    upsert?: Array<NecessityUpsertWithWhereUniqueWithoutCategoryInput>;

    @Field(() => NecessityCreateManyCategoryInputEnvelope, {nullable:true})
    createMany?: NecessityCreateManyCategoryInputEnvelope;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    connect?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    set?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    disconnect?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    delete?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityUpdateWithWhereUniqueWithoutCategoryInput], {nullable:true})
    update?: Array<NecessityUpdateWithWhereUniqueWithoutCategoryInput>;

    @Field(() => [NecessityUpdateManyWithWhereWithoutCategoryInput], {nullable:true})
    updateMany?: Array<NecessityUpdateManyWithWhereWithoutCategoryInput>;

    @Field(() => [NecessityScalarWhereInput], {nullable:true})
    deleteMany?: Array<NecessityScalarWhereInput>;
}
