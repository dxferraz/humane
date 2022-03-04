import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedUpdateInput {
    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field(() => Int, { nullable: true })
    chatRoomId?: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
