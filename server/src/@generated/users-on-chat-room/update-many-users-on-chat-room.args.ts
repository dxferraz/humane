import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomUpdateManyMutationInput } from './users-on-chat-room-update-many-mutation.input';
import { UsersOnChatRoomWhereInput } from './users-on-chat-room-where.input';

@ArgsType()
export class UpdateManyUsersOnChatRoomArgs {

    @Field(() => UsersOnChatRoomUpdateManyMutationInput, {nullable:false})
    data!: UsersOnChatRoomUpdateManyMutationInput;

    @Field(() => UsersOnChatRoomWhereInput, {nullable:true})
    where?: UsersOnChatRoomWhereInput;
}
