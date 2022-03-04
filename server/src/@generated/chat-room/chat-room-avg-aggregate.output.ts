import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;
}
