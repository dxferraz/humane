import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Message } from '../message/message.model';
import { MissingPerson } from '../missing-person/missing-person.model';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoom } from '../users-on-chat-room/users-on-chat-room.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => Date, { nullable: false })
    createdAt!: Date;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    thumbnail!: string;

    @Field(() => Date, { nullable: false })
    birthdate!: Date;

    @Field(() => String, { nullable: false })
    phone!: string;

    @Field(() => Role, { nullable: false, defaultValue: 'USER' })
    role!: keyof typeof Role;

    @Field(() => Boolean, { nullable: false, defaultValue: false })
    verified!: boolean;

    @Field(() => Date, { nullable: true })
    verifiedAt!: Date | null;

    @Field(() => Date, { nullable: true })
    updatedAt!: Date | null;

    @Field(() => String, { nullable: true })
    password!: string | null;

    @Field(() => [MissingPerson], { nullable: true })
    reports?: Array<MissingPerson>;

    @Field(() => [UsersOnChatRoom], { nullable: true })
    usersOnChatRoom?: Array<UsersOnChatRoom>;

    @Field(() => [Message], { nullable: true })
    messages?: Array<Message>;

    @Field(() => UserCount, { nullable: true })
    _count?: UserCount | null;
}
