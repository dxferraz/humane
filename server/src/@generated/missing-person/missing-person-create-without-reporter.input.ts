import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateNestedManyWithoutMissingPersonInput } from '../image/image-create-nested-many-without-missing-person.input';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Skin } from '../prisma/skin.enum';
import { EyeColor } from '../prisma/eye-color.enum';
import { HairColor } from '../prisma/hair-color.enum';

@InputType()
export class MissingPersonCreateWithoutReporterInput {

    @Field(() => ImageCreateNestedManyWithoutMissingPersonInput, {nullable:true})
    thumbnails?: ImageCreateNestedManyWithoutMissingPersonInput;

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

    @Field(() => Date, {nullable:true})
    disappearanceDay?: Date | string;

    @Field(() => EyeColor, {nullable:true})
    eyeColor?: keyof typeof EyeColor;

    @Field(() => HairColor, {nullable:true})
    hairColor?: keyof typeof HairColor;
}
