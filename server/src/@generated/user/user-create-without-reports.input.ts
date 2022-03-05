import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateNestedManyWithoutAuthorInput } from '../message/message-create-nested-many-without-author.input';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoomCreateNestedManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReportsInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    thumbnail!: string;

    @Field(() => Date, { nullable: false })
    birthdate!: Date | string;

    @Field(() => String, { nullable: false })
    phone!: string;

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

    @Field(() => UsersOnChatRoomCreateNestedManyWithoutUserInput, { nullable: true })
    usersOnChatRoom?: UsersOnChatRoomCreateNestedManyWithoutUserInput;

    @Field(() => MessageCreateNestedManyWithoutAuthorInput, { nullable: true })
    messages?: MessageCreateNestedManyWithoutAuthorInput;
}
