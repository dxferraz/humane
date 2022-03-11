import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HairColor } from './hair-color.enum';

@InputType()
export class EnumHairColorFilter {

    @Field(() => HairColor, {nullable:true})
    equals?: keyof typeof HairColor;

    @Field(() => [HairColor], {nullable:true})
    in?: Array<keyof typeof HairColor>;

    @Field(() => [HairColor], {nullable:true})
    notIn?: Array<keyof typeof HairColor>;

    @Field(() => EnumHairColorFilter, {nullable:true})
    not?: EnumHairColorFilter;
}
