import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyAuthorInput } from './message-create-many-author.input';

@InputType()
export class MessageCreateManyAuthorInputEnvelope {

    @Field(() => [MessageCreateManyAuthorInput], {nullable:false})
    data!: Array<MessageCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
