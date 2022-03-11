import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Skin } from './skin.enum';
import { IntFilter } from './int-filter.input';
import { EnumSkinFilter } from './enum-skin-filter.input';

@InputType()
export class EnumSkinWithAggregatesFilter {

    @Field(() => Skin, {nullable:true})
    equals?: keyof typeof Skin;

    @Field(() => [Skin], {nullable:true})
    in?: Array<keyof typeof Skin>;

    @Field(() => [Skin], {nullable:true})
    notIn?: Array<keyof typeof Skin>;

    @Field(() => EnumSkinWithAggregatesFilter, {nullable:true})
    not?: EnumSkinWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumSkinFilter, {nullable:true})
    _min?: EnumSkinFilter;

    @Field(() => EnumSkinFilter, {nullable:true})
    _max?: EnumSkinFilter;
}
