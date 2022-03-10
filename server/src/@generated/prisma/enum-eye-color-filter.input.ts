import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EyeColor } from './eye-color.enum';

@InputType()
export class EnumEyeColorFilter {

    @Field(() => EyeColor, {nullable:true})
    equals?: keyof typeof EyeColor;

    @Field(() => [EyeColor], {nullable:true})
    in?: Array<keyof typeof EyeColor>;

    @Field(() => [EyeColor], {nullable:true})
    notIn?: Array<keyof typeof EyeColor>;

    @Field(() => EnumEyeColorFilter, {nullable:true})
    not?: EnumEyeColorFilter;
}
