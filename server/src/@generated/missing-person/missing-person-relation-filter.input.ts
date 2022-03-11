import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereInput } from './missing-person-where.input';

@InputType()
export class MissingPersonRelationFilter {

    @Field(() => MissingPersonWhereInput, {nullable:true})
    is?: MissingPersonWhereInput;

    @Field(() => MissingPersonWhereInput, {nullable:true})
    isNot?: MissingPersonWhereInput;
}
