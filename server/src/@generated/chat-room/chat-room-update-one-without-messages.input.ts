import { Field, InputType } from '@nestjs/graphql';

import { ChatRoomCreateOrConnectWithoutMessagesInput } from './chat-room-create-or-connect-without-messages.input';
import { ChatRoomCreateWithoutMessagesInput } from './chat-room-create-without-messages.input';
import { ChatRoomUpdateWithoutMessagesInput } from './chat-room-update-without-messages.input';
import { ChatRoomUpsertWithoutMessagesInput } from './chat-room-upsert-without-messages.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@InputType()
export class ChatRoomUpdateOneWithoutMessagesInput {
    @Field(() => ChatRoomCreateWithoutMessagesInput, { nullable: true })
    create?: ChatRoomCreateWithoutMessagesInput;

    @Field(() => ChatRoomCreateOrConnectWithoutMessagesInput, { nullable: true })
    connectOrCreate?: ChatRoomCreateOrConnectWithoutMessagesInput;

    @Field(() => ChatRoomUpsertWithoutMessagesInput, { nullable: true })
    upsert?: ChatRoomUpsertWithoutMessagesInput;

    @Field(() => ChatRoomWhereUniqueInput, { nullable: true })
    connect?: ChatRoomWhereUniqueInput;

    @Field(() => Boolean, { nullable: true })
    disconnect?: boolean;

    @Field(() => Boolean, { nullable: true })
    delete?: boolean;

    @Field(() => ChatRoomUpdateWithoutMessagesInput, { nullable: true })
    update?: ChatRoomUpdateWithoutMessagesInput;
}
