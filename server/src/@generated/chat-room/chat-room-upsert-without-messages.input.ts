import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';
import { ChatRoomUpdateWithoutMessagesInput } from './chat-room-update-without-messages.input';

@InputType()
export class ChatRoomUpsertWithoutMessagesInput {
    @Field(() => ChatRoomUpdateWithoutMessagesInput, { nullable: false })
    update!: ChatRoomUpdateWithoutMessagesInput;

    @Field(() => ChatRoomCreateWithoutMessagesInput, { nullable: false })
    create!: ChatRoomCreateWithoutMessagesInput;
}
