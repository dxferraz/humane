import { Skin } from '.prisma/client';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MissingPersonUpdateInput {
    @Field(() => String, { nullable: true })
    name!: string;

    @Field(() => Number, { nullable: true })
    age!: number;

    @Field(() => Number, { nullable: true })
    height!: number;

    @Field(() => Skin, { nullable: true })
    skin!: keyof typeof Skin;

    @Field(() => String, { nullable: true })
    description!: string;

    @Field(() => () => {}, { nullable: true })
    thumbnails?: any;
}
