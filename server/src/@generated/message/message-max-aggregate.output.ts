import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    message?: string;

    @Field(() => Date, {nullable:true})
    timeStamp?: Date | string;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => Int, {nullable:true})
    chatRoomId?: number;
}
