import { ArgsType, Field } from '@nestjs/graphql';

import { MessageCreateInput } from './message-create.input';
import { MessageUpdateInput } from './message-update.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class UpsertOneMessageArgs {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateInput, { nullable: false })
    create!: MessageCreateInput;

    @Field(() => MessageUpdateInput, { nullable: false })
    update!: MessageUpdateInput;
}
