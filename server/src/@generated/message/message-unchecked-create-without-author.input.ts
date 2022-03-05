import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MessageUncheckedCreateWithoutAuthorInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    message!: string;

    @Field(() => Date, { nullable: true })
    timeStamp?: Date | string;

    @Field(() => Int, { nullable: true })
    chatRoomId?: number;
}
