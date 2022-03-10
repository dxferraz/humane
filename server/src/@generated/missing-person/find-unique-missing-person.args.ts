import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class FindUniqueMissingPersonArgs {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;
}
