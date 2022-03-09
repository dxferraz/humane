import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ImageCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    url!: number;

    @Field(() => Int, {nullable:false})
    missingPersonId!: number;

    @Field(() => Int, {nullable:false})
    donationId!: number;

    @Field(() => Int, {nullable:false})
    necessityId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
