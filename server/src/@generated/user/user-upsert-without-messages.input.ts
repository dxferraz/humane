import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { UserUpdateWithoutMessagesInput } from './user-update-without-messages.input';

@InputType()
export class UserUpsertWithoutMessagesInput {
    @Field(() => UserUpdateWithoutMessagesInput, { nullable: false })
    update!: UserUpdateWithoutMessagesInput;

    @Field(() => UserCreateWithoutMessagesInput, { nullable: false })
    create!: UserCreateWithoutMessagesInput;
}
