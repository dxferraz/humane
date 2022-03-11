import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UsersOnChatRoomUpdateManyMutationInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
