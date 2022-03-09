import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageCreateWithoutAuthorInput } from './message-create-without-author.input';

@InputType()
export class MessageCreateOrConnectWithoutAuthorInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageCreateWithoutAuthorInput, {nullable:false})
    create!: MessageCreateWithoutAuthorInput;
}
