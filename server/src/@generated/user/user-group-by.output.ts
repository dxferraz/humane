import { Field, Int, ObjectType } from '@nestjs/graphql';

import { Role } from '../prisma/role.enum';
import { UserAvgAggregate } from './user-avg-aggregate.output';
import { UserCountAggregate } from './user-count-aggregate.output';
import { UserMaxAggregate } from './user-max-aggregate.output';
import { UserMinAggregate } from './user-min-aggregate.output';
import { UserSumAggregate } from './user-sum-aggregate.output';

@ObjectType()
export class UserGroupBy {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Date, { nullable: false })
    createdAt!: Date | string;

    @Field(() => String, { nullable: false })
    email!: string;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => String, { nullable: false })
    thumbnail!: string;

    @Field(() => Date, { nullable: false })
    birthdate!: Date | string;

    @Field(() => String, { nullable: false })
    phone!: string;

    @Field(() => Role, { nullable: false })
    role!: keyof typeof Role;

    @Field(() => Boolean, { nullable: false })
    verified!: boolean;

    @Field(() => Date, { nullable: true })
    verifiedAt?: Date | string;

    @Field(() => Date, { nullable: true })
    updatedAt?: Date | string;

    @Field(() => String, { nullable: true })
    password?: string;

    @Field(() => UserCountAggregate, { nullable: true })
    _count?: UserCountAggregate;

    @Field(() => UserAvgAggregate, { nullable: true })
    _avg?: UserAvgAggregate;

    @Field(() => UserSumAggregate, { nullable: true })
    _sum?: UserSumAggregate;

    @Field(() => UserMinAggregate, { nullable: true })
    _min?: UserMinAggregate;

    @Field(() => UserMaxAggregate, { nullable: true })
    _max?: UserMaxAggregate;
}
