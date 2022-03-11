import { Skin } from '.prisma/client';
import { Field, InputType } from '@nestjs/graphql';
import { EyeColor, HairColor } from '@prisma/client';

@InputType()
export class MissingPersonCreateInput {
    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Number, { nullable: false })
    age!: number;

    @Field(() => Number, { nullable: false })
    height!: number;

    @Field(() => Skin, { nullable: false })
    skin!: keyof typeof Skin;

    @Field(() => String, { nullable: true })
    description!: string;

    @Field(() => () => {}, { nullable: true })
    thumbnails?: any;

    @Field(() => () => {}, { nullable: true })
    eyeColor: EyeColor;

    @Field(() => () => {}, { nullable: true })
    hairColor: HairColor;
}
