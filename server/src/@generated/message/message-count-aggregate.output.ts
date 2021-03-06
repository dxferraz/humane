import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MessageCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    message!: number;

    @Field(() => Int, {nullable:false})
    timeStamp!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => Int, {nullable:false})
    chatRoomId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
