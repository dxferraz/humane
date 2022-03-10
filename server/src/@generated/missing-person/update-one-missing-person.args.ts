import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonUpdateInput } from './missing-person-update.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class UpdateOneMissingPersonArgs {

    @Field(() => MissingPersonUpdateInput, {nullable:false})
    data!: MissingPersonUpdateInput;

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;
}
