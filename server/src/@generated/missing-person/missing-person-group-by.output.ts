import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Skin } from '../prisma/skin.enum';
import { EyeColor } from '../prisma/eye-color.enum';
import { HairColor } from '../prisma/hair-color.enum';
import { MissingPersonCountAggregate } from './missing-person-count-aggregate.output';
import { MissingPersonAvgAggregate } from './missing-person-avg-aggregate.output';
import { MissingPersonSumAggregate } from './missing-person-sum-aggregate.output';
import { MissingPersonMinAggregate } from './missing-person-min-aggregate.output';
import { MissingPersonMaxAggregate } from './missing-person-max-aggregate.output';

@ObjectType()
export class MissingPersonGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => Float, {nullable:true})
    height?: number;

    @Field(() => Skin, {nullable:true})
    skin?: keyof typeof Skin;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:false})
    reporterId!: number;

    @Field(() => Date, {nullable:true})
    disappearanceDay?: Date | string;

    @Field(() => EyeColor, {nullable:true})
    eyeColor?: keyof typeof EyeColor;

    @Field(() => HairColor, {nullable:true})
    hairColor?: keyof typeof HairColor;

    @Field(() => MissingPersonCountAggregate, {nullable:true})
    _count?: MissingPersonCountAggregate;

    @Field(() => MissingPersonAvgAggregate, {nullable:true})
    _avg?: MissingPersonAvgAggregate;

    @Field(() => MissingPersonSumAggregate, {nullable:true})
    _sum?: MissingPersonSumAggregate;

    @Field(() => MissingPersonMinAggregate, {nullable:true})
    _min?: MissingPersonMinAggregate;

    @Field(() => MissingPersonMaxAggregate, {nullable:true})
    _max?: MissingPersonMaxAggregate;
}
