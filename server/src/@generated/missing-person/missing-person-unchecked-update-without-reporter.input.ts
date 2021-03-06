import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ImageUncheckedUpdateManyWithoutMissingPersonInput } from '../image/image-unchecked-update-many-without-missing-person.input';
import { Float } from '@nestjs/graphql';
import { Skin } from '../prisma/skin.enum';
import { EyeColor } from '../prisma/eye-color.enum';
import { HairColor } from '../prisma/hair-color.enum';

@InputType()
export class MissingPersonUncheckedUpdateWithoutReporterInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => ImageUncheckedUpdateManyWithoutMissingPersonInput, {nullable:true})
    thumbnails?: ImageUncheckedUpdateManyWithoutMissingPersonInput;

    @Field(() => String, {nullable:true})
    name?: string;

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
