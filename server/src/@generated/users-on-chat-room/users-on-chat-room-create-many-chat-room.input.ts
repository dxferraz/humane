import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomCreateManyChatRoomInput {
    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
