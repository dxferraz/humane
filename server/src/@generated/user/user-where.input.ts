import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumRoleFilter } from '../prisma/enum-role-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { MissingPersonListRelationFilter } from '../missing-person/missing-person-list-relation-filter.input';
import { UsersOnChatRoomListRelationFilter } from '../users-on-chat-room/users-on-chat-room-list-relation-filter.input';
import { MessageListRelationFilter } from '../message/message-list-relation-filter.input';
import { DonationListRelationFilter } from '../donation/donation-list-relation-filter.input';
import { NecessityListRelationFilter } from '../necessity/necessity-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    thumbnail?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    birthdate?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    phone?: StringFilter;

    @Field(() => EnumRoleFilter, {nullable:true})
    role?: EnumRoleFilter;

    @Field(() => BoolFilter, {nullable:true})
    emailVerified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    emailVerifiedAt?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    profileVerified?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    profileVerifiedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => MissingPersonListRelationFilter, {nullable:true})
    reports?: MissingPersonListRelationFilter;

    @Field(() => UsersOnChatRoomListRelationFilter, {nullable:true})
    usersOnChatRoom?: UsersOnChatRoomListRelationFilter;

    @Field(() => MessageListRelationFilter, {nullable:true})
    messages?: MessageListRelationFilter;

    @Field(() => DonationListRelationFilter, {nullable:true})
    donations?: DonationListRelationFilter;

    @Field(() => NecessityListRelationFilter, {nullable:true})
    necessities?: NecessityListRelationFilter;
}
