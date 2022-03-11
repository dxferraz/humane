import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityCreateInput } from './necessity-create.input';
import { NecessityUpdateInput } from './necessity-update.input';

@ArgsType()
export class UpsertOneNecessityArgs {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityCreateInput, {nullable:false})
    create!: NecessityCreateInput;

    @Field(() => NecessityUpdateInput, {nullable:false})
    update!: NecessityUpdateInput;
}
