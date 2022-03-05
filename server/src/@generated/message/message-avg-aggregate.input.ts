import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MessageAvgAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    authorId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;
}
