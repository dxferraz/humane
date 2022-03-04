import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { Skin } from '../prisma/skin.enum';

@InputType()
export class MissingPersonUncheckedCreateWithoutThumbnailsInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Int, { nullable: false })
    age!: number;

    @Field(() => Float, { nullable: false })
    height!: number;

    @Field(() => Skin, { nullable: false })
    skin!: keyof typeof Skin;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => Int, { nullable: false })
    reporterId!: number;
}
