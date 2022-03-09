import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutMessagesInput } from './user-create-without-messages.input';

@InputType()
export class UserCreateOrConnectWithoutMessagesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutMessagesInput, {nullable:false})
    create!: UserCreateWithoutMessagesInput;
}
