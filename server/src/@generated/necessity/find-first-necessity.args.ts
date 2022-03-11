import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityWhereInput } from './necessity-where.input';
import { NecessityOrderByWithRelationInput } from './necessity-order-by-with-relation.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NecessityScalarFieldEnum } from './necessity-scalar-field.enum';

@ArgsType()
export class FindFirstNecessityArgs {

    @Field(() => NecessityWhereInput, {nullable:true})
    where?: NecessityWhereInput;

    @Field(() => [NecessityOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NecessityOrderByWithRelationInput>;

    @Field(() => NecessityWhereUniqueInput, {nullable:true})
    cursor?: NecessityWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NecessityScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NecessityScalarFieldEnum>;
}
