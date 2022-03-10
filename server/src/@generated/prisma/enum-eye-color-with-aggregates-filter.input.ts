import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EyeColor } from './eye-color.enum';
import { IntFilter } from './int-filter.input';
import { EnumEyeColorFilter } from './enum-eye-color-filter.input';

@InputType()
export class EnumEyeColorWithAggregatesFilter {

    @Field(() => EyeColor, {nullable:true})
    equals?: keyof typeof EyeColor;

    @Field(() => [EyeColor], {nullable:true})
    in?: Array<keyof typeof EyeColor>;

    @Field(() => [EyeColor], {nullable:true})
    notIn?: Array<keyof typeof EyeColor>;

    @Field(() => EnumEyeColorWithAggregatesFilter, {nullable:true})
    not?: EnumEyeColorWithAggregatesFilter;

    @Field(() => IntFilter, {nullable:true})
    _count?: IntFilter;

    @Field(() => EnumEyeColorFilter, {nullable:true})
    _min?: EnumEyeColorFilter;

    @Field(() => EnumEyeColorFilter, {nullable:true})
    _max?: EnumEyeColorFilter;
}
