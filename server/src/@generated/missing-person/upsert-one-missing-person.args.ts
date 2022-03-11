import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonCreateInput } from './missing-person-create.input';
import { MissingPersonUpdateInput } from './missing-person-update.input';

@ArgsType()
export class UpsertOneMissingPersonArgs {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateInput, {nullable:false})
    create!: MissingPersonCreateInput;

    @Field(() => MissingPersonUpdateInput, {nullable:false})
    update!: MissingPersonUpdateInput;
}
