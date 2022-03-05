import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomMinAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;
}
