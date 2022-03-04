import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomSumAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;
}
