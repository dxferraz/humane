import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutMessagesInput } from '../user/user-create-nested-one-without-messages.input';

@InputType()
export class MessageCreateWithoutChatRoomInput {

    @Field(() => String, {nullable:false})
    message!: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => UserCreateNestedOneWithoutMessagesInput, {nullable:false})
    author!: UserCreateNestedOneWithoutMessagesInput;
}
