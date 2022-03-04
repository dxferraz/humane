import { ArgsType, Field } from '@nestjs/graphql';

import { ChatRoomUpdateInput } from './chat-room-update.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@ArgsType()
export class UpdateOneChatRoomArgs {
    @Field(() => ChatRoomUpdateInput, { nullable: false })
    data!: ChatRoomUpdateInput;

    @Field(() => ChatRoomWhereUniqueInput, { nullable: false })
    where!: ChatRoomWhereUniqueInput;
}
