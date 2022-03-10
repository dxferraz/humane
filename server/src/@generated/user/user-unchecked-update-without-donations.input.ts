import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { MissingPersonUncheckedUpdateManyWithoutReporterInput } from '../missing-person/missing-person-unchecked-update-many-without-reporter.input';
import { UsersOnChatRoomUncheckedUpdateManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-unchecked-update-many-without-user.input';
import { MessageUncheckedUpdateManyWithoutAuthorInput } from '../message/message-unchecked-update-many-without-author.input';
import { NecessityUncheckedUpdateManyWithoutUserInput } from '../necessity/necessity-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutDonationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;

    @Field(() => Date, {nullable:true})
    birthdate?: Date | string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Date, {nullable:true})
    emailVerifiedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    profileVerified?: boolean;

    @Field(() => Date, {nullable:true})
    profileVerifiedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => MissingPersonUncheckedUpdateManyWithoutReporterInput, {nullable:true})
    reports?: MissingPersonUncheckedUpdateManyWithoutReporterInput;

    @Field(() => UsersOnChatRoomUncheckedUpdateManyWithoutUserInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUncheckedUpdateManyWithoutUserInput;

    @Field(() => MessageUncheckedUpdateManyWithoutAuthorInput, {nullable:true})
    messages?: MessageUncheckedUpdateManyWithoutAuthorInput;

    @Field(() => NecessityUncheckedUpdateManyWithoutUserInput, {nullable:true})
    necessities?: NecessityUncheckedUpdateManyWithoutUserInput;
}
