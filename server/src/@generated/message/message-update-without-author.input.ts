import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomUpdateOneRequiredWithoutMessagesInput } from '../chat-room/chat-room-update-one-required-without-messages.input';

@InputType()
export class MessageUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => ChatRoomUpdateOneRequiredWithoutMessagesInput, {nullable:true})
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesInput;
}
