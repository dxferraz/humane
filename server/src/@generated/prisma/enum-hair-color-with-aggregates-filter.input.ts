import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HairColor } from './hair-color.enum';
import { IntFilter } from './int-filter.input';
import { EnumHairColorFilter } from './enum-hair-color-filter.input';

@InputType()
export class EnumHairColorWithAggregatesFilter {

    @Field(() => HairColor, {nullable:true})
    equals?: keyof typeof HairColor;

    @Field(() => [HairColor], {nullable:true})
    in?: Array<keyof typeof HairColor>;

    @Field(() => [HairColor], {nullable:true})
    notIn?: Array<keyof typeof HairColor>;

    @Field(() => EnumHairColorWithAggregatesFilter, {nullable:true})
    not?: EnumHairColorWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumHairColorFilter, {nullable:true})
    _min?: EnumHairColorFilter;

    @Field(() => EnumHairColorFilter, {nullable:true})
    _max?: EnumHairColorFilter;
}
