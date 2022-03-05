import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersOnChatRoomSumAggregate {
    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field(() => Int, { nullable: true })
    chatRoomId?: number;
}
