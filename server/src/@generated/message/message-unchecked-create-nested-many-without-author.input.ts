import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateManyAuthorInputEnvelope } from './message-create-many-author-input-envelope.input';
import { MessageCreateOrConnectWithoutAuthorInput } from './message-create-or-connect-without-author.input';
import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@InputType()
export class MessageUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [MessageCreateWithoutAuthorInput], { nullable: true })
    create?: Array<MessageCreateWithoutAuthorInput>;

    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], { nullable: true })
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;

    @Field(() => MessageCreateManyAuthorInputEnvelope, { nullable: true })
    createMany?: MessageCreateManyAuthorInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], { nullable: true })
    connect?: Array<MessageWhereUniqueInput>;
}
