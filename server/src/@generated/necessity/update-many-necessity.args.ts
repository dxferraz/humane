import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityUpdateManyMutationInput } from './necessity-update-many-mutation.input';
import { NecessityWhereInput } from './necessity-where.input';

@ArgsType()
export class UpdateManyNecessityArgs {

    @Field(() => NecessityUpdateManyMutationInput, {nullable:false})
    data!: NecessityUpdateManyMutationInput;

    @Field(() => NecessityWhereInput, {nullable:true})
    where?: NecessityWhereInput;
}
