import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { EnumSkinFilter } from '../prisma/enum-skin-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumEyeColorFilter } from '../prisma/enum-eye-color-filter.input';
import { EnumHairColorFilter } from '../prisma/enum-hair-color-filter.input';

@InputType()
export class MissingPersonWhereInput {

    @Field(() => [MissingPersonWhereInput], {nullable:true})
    AND?: Array<MissingPersonWhereInput>;

    @Field(() => [MissingPersonWhereInput], {nullable:true})
    OR?: Array<MissingPersonWhereInput>;

    @Field(() => [MissingPersonWhereInput], {nullable:true})
    NOT?: Array<MissingPersonWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    thumbnails?: ImageListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    height?: FloatFilter;

    @Field(() => EnumSkinFilter, {nullable:true})
    skin?: EnumSkinFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    reporter?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    reporterId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    disappearanceDay?: DateTimeFilter;

    @Field(() => EnumEyeColorFilter, {nullable:true})
    eyeColor?: EnumEyeColorFilter;

    @Field(() => EnumHairColorFilter, {nullable:true})
    hairColor?: EnumHairColorFilter;
}
