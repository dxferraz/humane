import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereInput } from './necessity-where.input';

@InputType()
export class NecessityRelationFilter {

    @Field(() => NecessityWhereInput, {nullable:true})
    is?: NecessityWhereInput;

    @Field(() => NecessityWhereInput, {nullable:true})
    isNot?: NecessityWhereInput;
}
