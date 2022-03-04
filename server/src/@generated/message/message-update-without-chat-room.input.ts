import { Field, InputType } from '@nestjs/graphql';

import { UserUpdateOneRequiredWithoutMessagesInput } from '../user/user-update-one-required-without-messages.input';

@InputType()
export class MessageUpdateWithoutChatRoomInput {
    @Field(() => String, { nullable: true })
    message?: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutMessagesInput, { nullable: true })
    author?: UserUpdateOneRequiredWithoutMessagesInput;
}
