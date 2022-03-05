import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutMessagesInput } from './user-create-or-connect-without-messages.input';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutMessagesInput {
    @Field(() => UserCreateWithoutMessagesInput, { nullable: true })
    create?: UserCreateWithoutMessagesInput;

    @Field(() => UserCreateOrConnectWithoutMessagesInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;
}
