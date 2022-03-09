import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereInput } from './missing-person-where.input';

@InputType()
export class MissingPersonListRelationFilter {

    @Field(() => MissingPersonWhereInput, {nullable:true})
    every?: MissingPersonWhereInput;

    @Field(() => MissingPersonWhereInput, {nullable:true})
    some?: MissingPersonWhereInput;

    @Field(() => MissingPersonWhereInput, {nullable:true})
    none?: MissingPersonWhereInput;
}
