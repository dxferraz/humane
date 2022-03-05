import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ChatRoom } from '../chat-room/chat-room.model';
import { User } from '../user/user.model';

@ObjectType()
export class UsersOnChatRoom {
    @Field(() => User, { nullable: false })
    user?: User;

    @Field(() => Int, { nullable: false })
    userId!: number;

    @Field(() => ChatRoom, { nullable: false })
    chatRoom?: ChatRoom;

    @Field(() => Int, { nullable: false })
    chatRoomId!: number;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;
}
