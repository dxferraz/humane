import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityScalarWhereInput } from './necessity-scalar-where.input';
import { NecessityUpdateManyMutationInput } from './necessity-update-many-mutation.input';

@InputType()
export class NecessityUpdateManyWithWhereWithoutCategoryInput {

    @Field(() => NecessityScalarWhereInput, {nullable:false})
    where!: NecessityScalarWhereInput;

    @Field(() => NecessityUpdateManyMutationInput, {nullable:false})
    data!: NecessityUpdateManyMutationInput;
}
