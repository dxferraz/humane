import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChatRoomCountAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    _all?: true;
}
