import { ArgsType, Field } from '@nestjs/graphql';

import { MissingPersonCreateInput } from './missing-person-create.input';
import { MissingPersonUpdateInput } from './missing-person-update.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class UpsertOneMissingPersonArgs {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateInput, { nullable: false })
    create!: MissingPersonCreateInput;

    @Field(() => MissingPersonUpdateInput, { nullable: false })
    update!: MissingPersonUpdateInput;
}
