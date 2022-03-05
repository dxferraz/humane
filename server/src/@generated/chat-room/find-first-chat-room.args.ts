import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ChatRoomOrderByWithRelationInput } from './chat-room-order-by-with-relation.input';
import { ChatRoomScalarFieldEnum } from './chat-room-scalar-field.enum';
import { ChatRoomWhereInput } from './chat-room-where.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';

@ArgsType()
export class FindFirstChatRoomArgs {
    @Field(() => ChatRoomWhereInput, { nullable: true })
    where?: ChatRoomWhereInput;

    @Field(() => [ChatRoomOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ChatRoomOrderByWithRelationInput>;

    @Field(() => ChatRoomWhereUniqueInput, { nullable: true })
    cursor?: ChatRoomWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [ChatRoomScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ChatRoomScalarFieldEnum>;
}
