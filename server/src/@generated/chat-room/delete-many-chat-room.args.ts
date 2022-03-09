import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomWhereInput } from './chat-room-where.input';

@ArgsType()
export class DeleteManyChatRoomArgs {

    @Field(() => ChatRoomWhereInput, {nullable:true})
    where?: ChatRoomWhereInput;
}
