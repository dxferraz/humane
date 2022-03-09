import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';
import { ChatRoomOrderByWithRelationInput } from '../chat-room/chat-room-order-by-with-relation.input';

@InputType()
export class UsersOnChatRoomOrderByWithRelationInput {

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => ChatRoomOrderByWithRelationInput, {nullable:true})
    chatRoom?: ChatRoomOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    chatRoomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;
}
