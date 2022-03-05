import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedUpdateWithoutUserInput {
    @Field(() => Int, { nullable: true })
    chatRoomId?: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
