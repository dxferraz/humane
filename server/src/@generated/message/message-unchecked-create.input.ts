import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MessageUncheckedCreateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    message!: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => Int, { nullable: false })
    authorId!: number;

    @Field(() => Int, { nullable: true })
    chatRoomId?: number;
}
