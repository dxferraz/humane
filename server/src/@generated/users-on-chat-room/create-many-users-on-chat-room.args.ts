import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersOnChatRoomCreateManyInput } from './users-on-chat-room-create-many.input';

@ArgsType()
export class CreateManyUsersOnChatRoomArgs {

    @Field(() => [UsersOnChatRoomCreateManyInput], {nullable:false})
    data!: Array<UsersOnChatRoomCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
