import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UsersOnChatRoomCountAggregate {
    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Int, { nullable: false })
    chatRoomId!: number;

    @Field(() => Int, { nullable: false })
    createdAt!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
