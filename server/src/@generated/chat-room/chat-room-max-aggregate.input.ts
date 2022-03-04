import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChatRoomMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;
}
