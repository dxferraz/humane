import { ArgsType, Field } from '@nestjs/graphql';

import { MissingPersonWhereInput } from './missing-person-where.input';

@ArgsType()
export class DeleteManyMissingPersonArgs {
    @Field(() => MissingPersonWhereInput, { nullable: true })
    where?: MissingPersonWhereInput;
}
