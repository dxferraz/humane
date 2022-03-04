import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { ChatRoom } from '../chat-room/chat-room.model';
import { User } from '../user/user.model';

@ObjectType()
export class Message {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    message!: string;

    @Field(() => Date, { nullable: false })
    timeStamp!: Date;

    @Field(() => User, { nullable: false })
    author?: User;

    @Field(() => Int, { nullable: false })
    authorId!: number;

    @Field(() => ChatRoom, { nullable: true })
    chatRoom?: ChatRoom | null;

    @Field(() => Int, { nullable: true })
    chatRoomId!: number | null;
}
