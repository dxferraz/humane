import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutMessagesInput } from './user-create-or-connect-without-messages.input';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';
import { UserUpdateWithoutMessagesInput } from './user-update-without-messages.input';
import { UserUpsertWithoutMessagesInput } from './user-upsert-without-messages.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUpdateOneRequiredWithoutMessagesInput {
    @Field(() => UserCreateWithoutMessagesInput, { nullable: true })
    create?: UserCreateWithoutMessagesInput;

    @Field(() => UserCreateOrConnectWithoutMessagesInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput;

    @Field(() => UserUpsertWithoutMessagesInput, { nullable: true })
    upsert?: UserUpsertWithoutMessagesInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutMessagesInput, { nullable: true })
    update?: UserUpdateWithoutMessagesInput;
}
