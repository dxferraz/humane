import { Field, InputType } from '@nestjs/graphql';

import { EnumSkinFilter } from '../prisma/enum-skin-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class MissingPersonScalarWhereInput {
    @Field(() => [MissingPersonScalarWhereInput], { nullable: true })
    AND?: Array<MissingPersonScalarWhereInput>;

    @Field(() => [MissingPersonScalarWhereInput], { nullable: true })
    OR?: Array<MissingPersonScalarWhereInput>;

    @Field(() => [MissingPersonScalarWhereInput], { nullable: true })
    NOT?: Array<MissingPersonScalarWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

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

    @Field(() => IntFilter, { nullable: true })
    reporterId?: IntFilter;
}
