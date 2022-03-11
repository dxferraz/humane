import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MessageUncheckedUpdateWithoutChatRoomInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:true})
    authorId?: number;
}
