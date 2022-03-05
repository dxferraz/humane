import { Field, InputType, Int } from '@nestjs/graphql';

import { MessageUncheckedUpdateManyWithoutAuthorInput } from '../message/message-unchecked-update-many-without-author.input';
import { MissingPersonUncheckedUpdateManyWithoutReporterInput } from '../missing-person/missing-person-unchecked-update-many-without-reporter.input';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoomUncheckedUpdateManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

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

    @Field(() => MissingPersonUncheckedUpdateManyWithoutReporterInput, {
        nullable: true,
    })
    reports?: MissingPersonUncheckedUpdateManyWithoutReporterInput;

    @Field(() => UsersOnChatRoomUncheckedUpdateManyWithoutUserInput, { nullable: true })
    usersOnChatRoom?: UsersOnChatRoomUncheckedUpdateManyWithoutUserInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAuthorInput, { nullable: true })
    messages?: MessageUncheckedUpdateManyWithoutAuthorInput;
}
