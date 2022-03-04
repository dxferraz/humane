import { ArgsType, Field } from '@nestjs/graphql';

import { ChatRoomCreateInput } from './chat-room-create.input';

@ArgsType()
export class CreateOneChatRoomArgs {
    @Field(() => ChatRoomCreateInput, { nullable: false })
    data!: ChatRoomCreateInput;
}
