import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { Skin } from '../prisma/skin.enum';

@InputType()
export class MissingPersonUpdateManyMutationInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => Int, { nullable: true })
    age?: number;

    @Field(() => Float, { nullable: true })
    height?: number;

    @Field(() => Skin, { nullable: true })
    skin?: keyof typeof Skin;

    @Field(() => String, { nullable: true })
    description?: string;
}
