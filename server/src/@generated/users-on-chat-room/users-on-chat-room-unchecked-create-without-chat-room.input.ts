import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedCreateWithoutChatRoomInput {
    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
