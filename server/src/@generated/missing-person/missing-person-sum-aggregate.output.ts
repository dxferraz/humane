import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class MissingPersonSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Int, {nullable:true})
    reporterId?: number;
}
