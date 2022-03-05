import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageUpdateWithoutAuthorInput } from './message-update-without-author.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => MessageWhereUniqueInput, { nullable: false })
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAuthorInput, { nullable: false })
    update!: MessageUpdateWithoutAuthorInput;

    @Field(() => MessageCreateWithoutAuthorInput, { nullable: false })
    create!: MessageCreateWithoutAuthorInput;
}
