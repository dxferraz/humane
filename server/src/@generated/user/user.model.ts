import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { MissingPerson } from '../missing-person/missing-person.model';
import { UsersOnChatRoom } from '../users-on-chat-room/users-on-chat-room.model';
import { Message } from '../message/message.model';
import { Donation } from '../donation/donation.model';
import { Necessity } from '../necessity/necessity.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    thumbnail!: string | null;

    @Field(() => Date, {nullable:true})
    birthdate!: Date | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailVerified!: boolean;

    @Field(() => Date, {nullable:true})
    emailVerifiedAt!: Date | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    profileVerified!: boolean;

    @Field(() => Date, {nullable:true})
    profileVerifiedAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => [MissingPerson], {nullable:true})
    reports?: Array<MissingPerson>;

    @Field(() => [UsersOnChatRoom], {nullable:true})
    usersOnChatRoom?: Array<UsersOnChatRoom>;

    @Field(() => [Message], {nullable:true})
    messages?: Array<Message>;

    @Field(() => [Donation], {nullable:true})
    donations?: Array<Donation>;

    @Field(() => [Necessity], {nullable:true})
    necessities?: Array<Necessity>;

    @Field(() => UserCount, {nullable:true})
    _count?: UserCount | null;
}
