import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;
}
