import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

import { Skin } from '../prisma/skin.enum';

@ObjectType()
export class MissingPersonMinAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

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

    @Field(() => Int, { nullable: true })
    reporterId?: number;
}
