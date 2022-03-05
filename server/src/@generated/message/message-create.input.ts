import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateNestedOneWithoutMessagesInput } from '../chat-room/chat-room-create-nested-one-without-messages.input';
import { UserCreateNestedOneWithoutMessagesInput } from '../user/user-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateInput {
    @Field(() => String, { nullable: false })
    message!: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMessagesInput, { nullable: false })
    author!: UserCreateNestedOneWithoutMessagesInput;

    @Field(() => ChatRoomCreateNestedOneWithoutMessagesInput, { nullable: true })
    chatRoom?: ChatRoomCreateNestedOneWithoutMessagesInput;
}
