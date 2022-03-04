import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUpdateManyMutationInput {
    @Field(() => Date, { nullable: true })
    createdAt?: Date | string;
}
