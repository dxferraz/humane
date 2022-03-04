import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MessageSumAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    authorId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;
}