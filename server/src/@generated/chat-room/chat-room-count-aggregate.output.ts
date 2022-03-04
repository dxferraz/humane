import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
