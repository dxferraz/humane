import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersOnChatRoomMaxAggregate {
    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field(() => Int, { nullable: true })
    chatRoomId?: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
