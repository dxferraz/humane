import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { UsersOnChatRoomCreateNestedManyWithoutUserInput } from '../users-on-chat-room/users-on-chat-room-create-nested-many-without-user.input';
import { MessageCreateNestedManyWithoutAuthorInput } from '../message/message-create-nested-many-without-author.input';
import { DonationCreateNestedManyWithoutUserInput } from '../donation/donation-create-nested-many-without-user.input';
import { NecessityCreateNestedManyWithoutUserInput } from '../necessity/necessity-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutReportsInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

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

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => UsersOnChatRoomCreateNestedManyWithoutUserInput, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomCreateNestedManyWithoutUserInput;

    @Field(() => MessageCreateNestedManyWithoutAuthorInput, {nullable:true})
    messages?: MessageCreateNestedManyWithoutAuthorInput;

    @Field(() => DonationCreateNestedManyWithoutUserInput, {nullable:true})
    donations?: DonationCreateNestedManyWithoutUserInput;

    @Field(() => NecessityCreateNestedManyWithoutUserInput, {nullable:true})
    necessities?: NecessityCreateNestedManyWithoutUserInput;
}
