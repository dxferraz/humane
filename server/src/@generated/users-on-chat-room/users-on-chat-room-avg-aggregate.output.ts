import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersOnChatRoomAvgAggregate {
    @Field(() => Float, { nullable: true })
    userId?: number;

    @Field(() => Float, { nullable: true })
    chatRoomId?: number;
}
