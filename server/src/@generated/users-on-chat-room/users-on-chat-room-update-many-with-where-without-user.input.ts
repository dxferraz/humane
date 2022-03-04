import { Field, InputType } from '@nestjs/graphql';

import { UsersOnChatRoomScalarWhereInput } from './users-on-chat-room-scalar-where.input';
import { UsersOnChatRoomUpdateManyMutationInput } from './users-on-chat-room-update-many-mutation.input';

@InputType()
export class UsersOnChatRoomUpdateManyWithWhereWithoutUserInput {
    @Field(() => UsersOnChatRoomScalarWhereInput, { nullable: false })
    where!: UsersOnChatRoomScalarWhereInput;

    @Field(() => UsersOnChatRoomUpdateManyMutationInput, { nullable: false })
    data!: UsersOnChatRoomUpdateManyMutationInput;
}
