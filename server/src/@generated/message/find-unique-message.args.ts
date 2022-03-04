import { ArgsType, Field } from '@nestjs/graphql';

import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class FindUniqueMessageArgs {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;
}
