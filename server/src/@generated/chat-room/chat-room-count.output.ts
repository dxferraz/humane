import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ChatRoomCount {
    @Field(() => Int, { nullable: false })
    messages!: number;

    @Field(() => Int, { nullable: false })
    usersOnChatRoom!: number;
}
