import { ArgsType, Field } from '@nestjs/graphql';

import { MessageWhereInput } from './message-where.input';

@ArgsType()
export class DeleteManyMessageArgs {
    @Field(() => MessageWhereInput, { nullable: true })
    where?: MessageWhereInput;
}
