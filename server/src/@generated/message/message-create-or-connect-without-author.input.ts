import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageCreateOrConnectWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutAuthorInput, { nullable: false })
    create!: MessageCreateWithoutAuthorInput;
}
