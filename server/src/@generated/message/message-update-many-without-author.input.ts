import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';
import { MessageCreateOrConnectWithoutAuthorInput } from './message-create-or-connect-without-author.input';
import { MessageUpsertWithWhereUniqueWithoutAuthorInput } from './message-upsert-with-where-unique-without-author.input';
import { MessageCreateManyAuthorInputEnvelope } from './message-create-many-author-input-envelope.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithWhereUniqueWithoutAuthorInput } from './message-update-with-where-unique-without-author.input';
import { MessageUpdateManyWithWhereWithoutAuthorInput } from './message-update-many-with-where-without-author.input';
import { MessageScalarWhereInput } from './message-scalar-where.input';

@InputType()
export class MessageUpdateManyWithoutAuthorInput {

    @Field(() => [MessageCreateWithoutAuthorInput], {nullable:true})
    create?: Array<MessageCreateWithoutAuthorInput>;

    @Field(() => [MessageCreateOrConnectWithoutAuthorInput], {nullable:true})
    connectOrCreate?: Array<MessageCreateOrConnectWithoutAuthorInput>;

    @Field(() => [MessageUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    upsert?: Array<MessageUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => MessageCreateManyAuthorInputEnvelope, {nullable:true})
    createMany?: MessageCreateManyAuthorInputEnvelope;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    connect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    set?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    disconnect?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageWhereUniqueInput], {nullable:true})
    delete?: Array<MessageWhereUniqueInput>;

    @Field(() => [MessageUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    update?: Array<MessageUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [MessageUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    updateMany?: Array<MessageUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [MessageScalarWhereInput], {nullable:true})
    deleteMany?: Array<MessageScalarWhereInput>;
}
