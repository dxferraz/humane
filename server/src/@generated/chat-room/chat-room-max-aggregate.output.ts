import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomMaxAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;
}
