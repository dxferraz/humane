import { ArgsType, Field } from '@nestjs/graphql';

import { ChatRoomWhereInput } from './chat-room-where.input';

@ArgsType()
export class DeleteManyChatRoomArgs {
    @Field(() => ChatRoomWhereInput, { nullable: true })
    where?: ChatRoomWhereInput;
}
