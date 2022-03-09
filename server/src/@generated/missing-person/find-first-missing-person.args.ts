import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonWhereInput } from './missing-person-where.input';
import { MissingPersonOrderByWithRelationInput } from './missing-person-order-by-with-relation.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MissingPersonScalarFieldEnum } from './missing-person-scalar-field.enum';

@ArgsType()
export class FindFirstMissingPersonArgs {

    @Field(() => MissingPersonWhereInput, {nullable:true})
    where?: MissingPersonWhereInput;

    @Field(() => [MissingPersonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MissingPersonOrderByWithRelationInput>;

    @Field(() => MissingPersonWhereUniqueInput, {nullable:true})
    cursor?: MissingPersonWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MissingPersonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MissingPersonScalarFieldEnum>;
}
