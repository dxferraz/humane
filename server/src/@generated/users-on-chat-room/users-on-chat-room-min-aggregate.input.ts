import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    userId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;

    @Field(() => Boolean, { nullable: true })
    createdAt?: true;
}
