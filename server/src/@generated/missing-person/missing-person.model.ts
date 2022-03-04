import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';

import { Image } from '../image/image.model';
import { Skin } from '../prisma/skin.enum';
import { User } from '../user/user.model';
import { MissingPersonCount } from './missing-person-count.output';

@ObjectType()
export class MissingPerson {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => [Image], { nullable: true })
    thumbnails?: Array<Image>;

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

    @Field(() => User, { nullable: false })
    reporter?: User;

    @Field(() => Int, { nullable: false })
    reporterId!: number;

    @Field(() => MissingPersonCount, { nullable: true })
    _count?: MissingPersonCount | null;
}
