import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ChatRoomMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;
}
