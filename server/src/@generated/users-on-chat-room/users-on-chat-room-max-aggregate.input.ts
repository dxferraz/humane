import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;

    @Field(() => Boolean, { nullable: true })
    createdAt?: true;
}
