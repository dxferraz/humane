import { Field, InputType } from '@nestjs/graphql';

import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { EnumRoleWithAggregatesFilter } from '../prisma/enum-role-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<UserScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    thumbnail?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    birthdate?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    phone?: StringWithAggregatesFilter;

    @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
    role?: EnumRoleWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, { nullable: true })
    verified?: BoolWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    verifiedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    password?: StringWithAggregatesFilter;
}
