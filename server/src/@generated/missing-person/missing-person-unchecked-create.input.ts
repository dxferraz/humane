import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedCreateNestedManyWithoutMissingPersonInput } from '../image/image-unchecked-create-nested-many-without-missing-person.input';
import { Float } from '@nestjs/graphql';
import { Skin } from '../prisma/skin.enum';
import { EyeColor } from '../prisma/eye-color.enum';
import { HairColor } from '../prisma/hair-color.enum';

@InputType()
export class MissingPersonUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ImageUncheckedCreateNestedManyWithoutMissingPersonInput, {nullable:true})
    thumbnails?: ImageUncheckedCreateNestedManyWithoutMissingPersonInput;

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
}
