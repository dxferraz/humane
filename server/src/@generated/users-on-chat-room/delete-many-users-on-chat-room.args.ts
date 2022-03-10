import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';

@ArgsType()
export class DeleteManyUsersOnChatRoomArgs {

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    where?: UsersOnChatRoomWhereInput;
}
