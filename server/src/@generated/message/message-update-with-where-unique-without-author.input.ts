import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageWhereUniqueInput } from './message-where-unique.input';
import { MessageUpdateWithoutAuthorInput } from './message-update-without-author.input';

@InputType()
export class MessageUpdateWithWhereUniqueWithoutAuthorInput {

    @Field(() => MessageWhereUniqueInput, {nullable:false})
    where!: MessageWhereUniqueInput;

    @Field(() => MessageUpdateWithoutAuthorInput, {nullable:false})
    data!: MessageUpdateWithoutAuthorInput;
}
