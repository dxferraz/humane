import { Field, InputType } from '@nestjs/graphql';

import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { EnumSkinFilter } from '../prisma/enum-skin-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class MissingPersonWhereInput {
    @Field(() => [MissingPersonWhereInput], { nullable: true })
    AND?: Array<MissingPersonWhereInput>;

    @Field(() => [MissingPersonWhereInput], { nullable: true })
    OR?: Array<MissingPersonWhereInput>;

    @Field(() => [MissingPersonWhereInput], { nullable: true })
    NOT?: Array<MissingPersonWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => ImageListRelationFilter, { nullable: true })
    thumbnails?: ImageListRelationFilter;

    @Field(() => StringFilter, { nullable: true })
    name?: StringFilter;

    @Field(() => IntFilter, { nullable: true })
    age?: IntFilter;

    @Field(() => FloatFilter, { nullable: true })
    height?: FloatFilter;

    @Field(() => EnumSkinFilter, { nullable: true })
    skin?: EnumSkinFilter;

    @Field(() => StringFilter, { nullable: true })
    description?: StringFilter;

    @Field(() => UserRelationFilter, { nullable: true })
    reporter?: UserRelationFilter;

    @Field(() => IntFilter, { nullable: true })
    reporterId?: IntFilter;
}
