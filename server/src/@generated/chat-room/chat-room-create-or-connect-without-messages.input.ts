import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@InputType()
export class ChatRoomCreateOrConnectWithoutMessagesInput {
    @Field(() => ChatRoomWhereUniqueInput, { nullable: false })
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateWithoutMessagesInput, { nullable: false })
    create!: ChatRoomCreateWithoutMessagesInput;
}
