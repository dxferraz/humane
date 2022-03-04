import { Field, InputType } from '@nestjs/graphql';

import { Skin } from './skin.enum';

@InputType()
export class EnumSkinFilter {
    @Field(() => Skin, { nullable: true })
    equals?: keyof typeof Skin;

    @Field(() => [Skin], { nullable: true })
    in?: Array<keyof typeof Skin>;

    @Field(() => [Skin], { nullable: true })
    notIn?: Array<keyof typeof Skin>;

    @Field(() => EnumSkinFilter, { nullable: true })
    not?: EnumSkinFilter;
}
