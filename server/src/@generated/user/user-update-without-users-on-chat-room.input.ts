import { Field, InputType } from '@nestjs/graphql';

import { MessageUpdateManyWithoutAuthorInput } from '../message/message-update-many-without-author.input';
import { MissingPersonUpdateManyWithoutReporterInput } from '../missing-person/missing-person-update-many-without-reporter.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserUpdateWithoutUsersOnChatRoomInput {
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

    @Field(() => MissingPersonUpdateManyWithoutReporterInput, { nullable: true })
    reports?: MissingPersonUpdateManyWithoutReporterInput;

    @Field(() => MessageUpdateManyWithoutAuthorInput, { nullable: true })
    messages?: MessageUpdateManyWithoutAuthorInput;
}
