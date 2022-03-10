import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ImageAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    missingPersonId?: number;

    @Field(() => Float, {nullable:true})
    donationId?: number;

    @Field(() => Float, {nullable:true})
    necessityId?: number;
}
