import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedCreateWithoutUserInput {
    @Field(() => Int, { nullable: false })
    chatRoomId!: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}