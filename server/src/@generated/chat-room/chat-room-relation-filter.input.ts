import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChatRoomWhereInput } from './chat-room-where.input';

@InputType()
export class ChatRoomRelationFilter {

    @Field(() => ChatRoomWhereInput, {nullable:true})
    is?: ChatRoomWhereInput;

    @Field(() => ChatRoomWhereInput, {nullable:true})
    isNot?: ChatRoomWhereInput;
}
