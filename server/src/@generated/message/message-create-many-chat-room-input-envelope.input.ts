import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageCreateManyChatRoomInput } from './message-create-many-chat-room.input';

@InputType()
export class MessageCreateManyChatRoomInputEnvelope {

    @Field(() => [MessageCreateManyChatRoomInput], {nullable:false})
    data!: Array<MessageCreateManyChatRoomInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
