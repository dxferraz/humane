import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomWhereInput } from './chat-room-where.input';
import { ChatRoomOrderByWithRelationInput } from './chat-room-order-by-with-relation.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatRoomCountAggregateInput } from './chat-room-count-aggregate.input';
import { ChatRoomAvgAggregateInput } from './chat-room-avg-aggregate.input';
import { ChatRoomSumAggregateInput } from './chat-room-sum-aggregate.input';
import { ChatRoomMinAggregateInput } from './chat-room-min-aggregate.input';
import { ChatRoomMaxAggregateInput } from './chat-room-max-aggregate.input';

@ArgsType()
export class ChatRoomAggregateArgs {

    @Field(() => ChatRoomWhereInput, {nullable:true})
    where?: ChatRoomWhereInput;

    @Field(() => [ChatRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatRoomOrderByWithRelationInput>;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    cursor?: ChatRoomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ChatRoomCountAggregateInput, {nullable:true})
    _count?: ChatRoomCountAggregateInput;

    @Field(() => ChatRoomAvgAggregateInput, {nullable:true})
    _avg?: ChatRoomAvgAggregateInput;

    @Field(() => ChatRoomSumAggregateInput, {nullable:true})
    _sum?: ChatRoomSumAggregateInput;

    @Field(() => ChatRoomMinAggregateInput, {nullable:true})
    _min?: ChatRoomMinAggregateInput;

    @Field(() => ChatRoomMaxAggregateInput, {nullable:true})
    _max?: ChatRoomMaxAggregateInput;
}
