import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Donation } from '../donation/donation.model';
import { Necessity } from '../necessity/necessity.model';
import { CategoryCount } from './category-count.output';

@ObjectType()
export class Category {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => [Donation], {nullable:true})
    Donation?: Array<Donation>;

    @Field(() => [Necessity], {nullable:true})
    Necessity?: Array<Necessity>;

    @Field(() => CategoryCount, {nullable:false})
    _count?: CategoryCount;
}
