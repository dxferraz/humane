import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutUsersOnChatRoomInput } from './user-create-without-users-on-chat-room.input';

@InputType()
export class UserCreateOrConnectWithoutUsersOnChatRoomInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutUsersOnChatRoomInput, {nullable:false})
    create!: UserCreateWithoutUsersOnChatRoomInput;
}
