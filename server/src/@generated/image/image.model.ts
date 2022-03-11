import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MissingPerson } from '../missing-person/missing-person.model';
import { Int } from '@nestjs/graphql';
import { Donation } from '../donation/donation.model';
import { Necessity } from '../necessity/necessity.model';

@ObjectType()
export class Image {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => MissingPerson, {nullable:true})
    MissingPerson?: MissingPerson | null;

    @Field(() => Int, {nullable:true})
    missingPersonId!: number | null;

    @Field(() => Donation, {nullable:true})
    Donation?: Donation | null;

    @Field(() => Int, {nullable:true})
    donationId!: number | null;

    @Field(() => Necessity, {nullable:true})
    Necessity?: Necessity | null;

    @Field(() => Int, {nullable:true})
    necessityId!: number | null;
}
