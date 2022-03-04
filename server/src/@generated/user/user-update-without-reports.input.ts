import { Field, InputType } from '@nestjs/graphql';

import { MessageUpdateManyWithoutAuthorInput } from '../message/message-update-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoomUpdateManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutReportsInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => String, { nullable: true })
    email?: string;

    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => String, { nullable: true })
    thumbnail?: string;

    @Field(() => Date, { nullable: true })
    birthdate?: Date | string;

    @Field(() => String, { nullable: true })
    phone?: string;

    @Field(() => Role, { nullable: true })
    role?: keyof typeof Role;

    @Field(() => Boolean, { nullable: true })
    verified?: boolean;

    @Field(() => Date, { nullable: true })
    verifiedAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => UsersOnChatRoomUpdateManyWithoutUserInput, { nullable: true })
    usersOnChatRoom?: UsersOnChatRoomUpdateManyWithoutUserInput;

    @Field(() => MessageUpdateManyWithoutAuthorInput, { nullable: true })
    messages?: MessageUpdateManyWithoutAuthorInput;
}