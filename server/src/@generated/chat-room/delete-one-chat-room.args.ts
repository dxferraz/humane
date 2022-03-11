import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@ArgsType()
export class DeleteOneChatRoomArgs {

    @Field(() => ChatRoomWhereUniqueInput, {nullable:false})
    where!: ChatRoomWhereUniqueInput;
}
