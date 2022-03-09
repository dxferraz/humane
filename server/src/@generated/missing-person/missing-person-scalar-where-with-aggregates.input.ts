import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumSkinWithAggregatesFilter } from '../prisma/enum-skin-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumEyeColorWithAggregatesFilter } from '../prisma/enum-eye-color-with-aggregates-filter.input';
import { EnumHairColorWithAggregatesFilter } from '../prisma/enum-hair-color-with-aggregates-filter.input';

@InputType()
export class MissingPersonScalarWhereWithAggregatesInput {

    @Field(() => [MissingPersonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MissingPersonScalarWhereWithAggregatesInput>;

    @Field(() => [MissingPersonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MissingPersonScalarWhereWithAggregatesInput>;

    @Field(() => [MissingPersonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MissingPersonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    height?: FloatWithAggregatesFilter;

    @Field(() => EnumSkinWithAggregatesFilter, {nullable:true})
    skin?: EnumSkinWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    reporterId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    disappearanceDay?: DateTimeWithAggregatesFilter;

    @Field(() => EnumEyeColorWithAggregatesFilter, {nullable:true})
    eyeColor?: EnumEyeColorWithAggregatesFilter;

    @Field(() => EnumHairColorWithAggregatesFilter, {nullable:true})
    hairColor?: EnumHairColorWithAggregatesFilter;
}
