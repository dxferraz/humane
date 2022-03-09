import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutMessagesInput } from '../user/user-update-one-required-without-messages.input';
import { ChatRoomUpdateOneRequiredWithoutMessagesInput } from '../chat-room/chat-room-update-one-required-without-messages.input';

@InputType()
export class MessageUpdateInput {

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutMessagesInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutMessagesInput;

    @Field(() => ChatRoomUpdateOneRequiredWithoutMessagesInput, {nullable:true})
    chatRoom?: ChatRoomUpdateOneRequiredWithoutMessagesInput;
}
