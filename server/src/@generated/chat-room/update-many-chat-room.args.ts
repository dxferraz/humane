import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomUncheckedUpdateManyInput } from './chat-room-unchecked-update-many.input';
import { ChatRoomWhereInput } from './chat-room-where.input';

@ArgsType()
export class UpdateManyChatRoomArgs {

    @Field(() => ChatRoomUncheckedUpdateManyInput, {nullable:false})
    data!: ChatRoomUncheckedUpdateManyInput;

    @Field(() => ChatRoomWhereInput, {nullable:true})
    where?: ChatRoomWhereInput;
}
