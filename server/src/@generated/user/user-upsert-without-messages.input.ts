import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutMessagesInput } from './user-update-without-messages.input';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';

@InputType()
export class UserUpsertWithoutMessagesInput {

    @Field(() => UserUpdateWithoutMessagesInput, {nullable:false})
    update!: UserUpdateWithoutMessagesInput;

    @Field(() => UserCreateWithoutMessagesInput, {nullable:false})
    create!: UserCreateWithoutMessagesInput;
}
