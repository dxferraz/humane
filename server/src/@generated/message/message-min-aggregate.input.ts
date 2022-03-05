import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MessageMinAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    message?: true;

    @Field(() => Boolean, { nullable: true })
    timeStamp?: true;

    @Field(() => Boolean, { nullable: true })
    authorId?: true;

    @Field(() => Boolean, { nullable: true })
    chatRoomId?: true;
}
