import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MessageAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;

    @Field(() => Float, { nullable: true })
    authorId?: number;

    @Field(() => Float, { nullable: true })
    chatRoomId?: number;
}
