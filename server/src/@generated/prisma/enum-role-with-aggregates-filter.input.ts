import { Field, InputType } from '@nestjs/graphql';

import { EnumRoleFilter } from './enum-role-filter.input';
import { IntFilter } from './int-filter.input';
import { Role } from './role.enum';

@InputType()
export class EnumRoleWithAggregatesFilter {
    @Field(() => Role, { nullable: true })
    equals?: keyof typeof Role;

    @Field(() => [Role], { nullable: true })
    in?: Array<keyof typeof Role>;

    @Field(() => [Role], { nullable: true })
    notIn?: Array<keyof typeof Role>;

    @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
    not?: EnumRoleWithAggregatesFilter;

    @Field(() => IntFilter, { nullable: true })
    _count?: IntFilter;

    @Field(() => EnumRoleFilter, { nullable: true })
    _min?: EnumRoleFilter;

    @Field(() => EnumRoleFilter, { nullable: true })
    _max?: EnumRoleFilter;
}
