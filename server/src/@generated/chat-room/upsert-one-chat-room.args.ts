import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { ChatRoomCreateInput } from './chat-room-create.input';
import { ChatRoomUpdateInput } from './chat-room-update.input';

@ArgsType()
export class UpsertOneChatRoomArgs {

    @Field(() => ChatRoomWhereUniqueInput, {nullable:false})
    where!: ChatRoomWhereUniqueInput;

    @Field(() => ChatRoomCreateInput, {nullable:false})
    create!: ChatRoomCreateInput;

    @Field(() => ChatRoomUpdateInput, {nullable:false})
    update!: ChatRoomUpdateInput;
}
