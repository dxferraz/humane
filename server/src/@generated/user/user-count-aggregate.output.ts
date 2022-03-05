import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, { nullable: false })
    id!: number;

    @Field(() => Int, { nullable: false })
    createdAt!: number;

    @Field(() => Int, { nullable: false })
    email!: number;

    @Field(() => Int, { nullable: false })
    name!: number;

    @Field(() => Int, { nullable: false })
    thumbnail!: number;

    @Field(() => Int, { nullable: false })
    birthdate!: number;

    @Field(() => Int, { nullable: false })
    phone!: number;

    @Field(() => Int, { nullable: false })
    role!: number;

    @Field(() => Int, { nullable: false })
    verified!: number;

    @Field(() => Int, { nullable: false })
    verifiedAt!: number;

    @Field(() => Int, { nullable: false })
    updatedAt!: number;

    @Field(() => Int, { nullable: false })
    password!: number;

    @Field(() => Int, { nullable: false })
    _all!: number;
}
