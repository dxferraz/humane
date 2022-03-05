import { ArgsType, Field } from '@nestjs/graphql';

import { ChatRoomCreateInput } from './chat-room-create.input';
import { ChatRoomUpdateInput } from './chat-room-update.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@ArgsType()
export class UpsertOneChatRoomArgs {
    @Field(() => ChatRoomWhereUniqueInput, { nullable: false })
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateInput, { nullable: false })
    create!: ChatRoomCreateInput;

    @Field(() => ChatRoomUpdateInput, { nullable: false })
    update!: ChatRoomUpdateInput;
}
