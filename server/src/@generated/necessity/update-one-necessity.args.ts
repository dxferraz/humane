import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityUpdateInput } from './necessity-update.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';

@ArgsType()
export class UpdateOneNecessityArgs {

    @Field(() => NecessityUpdateInput, {nullable:false})
    data!: NecessityUpdateInput;

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;
}
