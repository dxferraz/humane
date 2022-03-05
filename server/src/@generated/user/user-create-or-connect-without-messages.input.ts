import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutMessagesInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessagesInput, { nullable: false })
    create!: UserCreateWithoutMessagesInput;
}
