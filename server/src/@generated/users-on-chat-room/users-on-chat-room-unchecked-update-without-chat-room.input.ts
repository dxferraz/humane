import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUncheckedUpdateWithoutChatRoomInput {
    @Field(() => Int, { nullable: true })
    userId?: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
