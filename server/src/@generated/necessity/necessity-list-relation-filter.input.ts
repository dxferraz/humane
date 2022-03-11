import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereInput } from './necessity-where.input';

@InputType()
export class NecessityListRelationFilter {

    @Field(() => NecessityWhereInput, {nullable:true})
    every?: NecessityWhereInput;

    @Field(() => NecessityWhereInput, {nullable:true})
    some?: NecessityWhereInput;

    @Field(() => NecessityWhereInput, {nullable:true})
    none?: NecessityWhereInput;
}
