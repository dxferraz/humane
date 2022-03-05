import { Field, InputType } from '@nestjs/graphql';

import { MessageCreateNestedManyWithoutAuthorInput } from '../message/message-create-nested-many-without-author.input';
import { MissingPersonCreateNestedManyWithoutReporterInput } from '../missing-person/missing-person-create-nested-many-without-reporter.input';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateWithoutUsersOnChatRoomInput {
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

    @Field(() => MissingPersonCreateNestedManyWithoutReporterInput, { nullable: true })
    reports?: MissingPersonCreateNestedManyWithoutReporterInput;

    @Field(() => MessageCreateNestedManyWithoutAuthorInput, { nullable: true })
    messages?: MessageCreateNestedManyWithoutAuthorInput;
}
