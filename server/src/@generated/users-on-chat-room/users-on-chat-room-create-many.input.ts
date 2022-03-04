import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomCreateManyInput {
    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => Int, { nullable: false })
    chatRoomId!: number;

    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}