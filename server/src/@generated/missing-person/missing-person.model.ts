import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Skin } from '../prisma/skin.enum';
import { User } from '../user/user.model';
import { EyeColor } from '../prisma/eye-color.enum';
import { HairColor } from '../prisma/hair-color.enum';
import { MissingPersonCount } from './missing-person-count.output';

@ObjectType()
export class MissingPerson {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [Image], {nullable:true})
    thumbnails?: Array<Image>;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:true})
    age!: number | null;

    @Field(() => Float, {nullable:true})
    height!: number | null;

    @Field(() => Skin, {nullable:true})
    skin!: keyof typeof Skin | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => User, {nullable:false})
    reporter?: User;

    @Field(() => Int, {nullable:false})
    reporterId!: number;

    @Field(() => Date, {nullable:true})
    disappearanceDay!: Date | null;

    @Field(() => EyeColor, {nullable:true})
    eyeColor!: keyof typeof EyeColor | null;

    @Field(() => HairColor, {nullable:true})
    hairColor!: keyof typeof HairColor | null;

    @Field(() => MissingPersonCount, {nullable:false})
    _count?: MissingPersonCount;
}
