import { ArgsType, Field } from '@nestjs/graphql';

import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class DeleteOneMissingPersonArgs {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;
}