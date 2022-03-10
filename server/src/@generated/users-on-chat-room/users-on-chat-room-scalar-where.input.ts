import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UsersOnChatRoomScalarWhereInput {

    @Field(() => [UsersOnChatRoomScalarWhereInput], {nullable:true})
    AND?: Array<UsersOnChatRoomScalarWhereInput>;

    @Field(() => [UsersOnChatRoomScalarWhereInput], {nullable:true})
    OR?: Array<UsersOnChatRoomScalarWhereInput>;

    @Field(() => [UsersOnChatRoomScalarWhereInput], {nullable:true})
    NOT?: Array<UsersOnChatRoomScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    chatRoomId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
