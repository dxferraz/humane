import { Field, InputType } from '@nestjs/graphql';

import { MessageUpdateWithoutAuthorInput } from './message-update-without-author.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAuthorInput, { nullable: false })
    data!: MessageUpdateWithoutAuthorInput;
}
