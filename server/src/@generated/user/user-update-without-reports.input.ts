import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoomUpdateManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-update-many-without-user.input';
import { MessageUpdateManyWithoutAuthorInput } from '../message/message-update-many-without-author.input';
import { DonationUpdateManyWithoutUserInput } from '../donation/donation-update-many-without-user.input';
import { NecessityUpdateManyWithoutUserInput } from '../necessity/necessity-update-many-without-user.input';

@InputType()
export class UserUpdateWithoutReportsInput {

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

    @Field(() => UsersOnChatRoomUpdateManyWithoutUserInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomUpdateManyWithoutUserInput;

    @Field(() => MessageUpdateManyWithoutAuthorInput, {nullable:true})
    messages?: MessageUpdateManyWithoutAuthorInput;

    @Field(() => DonationUpdateManyWithoutUserInput, {nullable:true})
    donations?: DonationUpdateManyWithoutUserInput;

    @Field(() => NecessityUpdateManyWithoutUserInput, {nullable:true})
    necessities?: NecessityUpdateManyWithoutUserInput;
}
