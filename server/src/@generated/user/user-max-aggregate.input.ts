import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, { nullable: true })
    id?: true;

    @Field(() => Boolean, { nullable: true })
    createdAt?: true;

    @Field(() => Boolean, { nullable: true })
    email?: true;

    @Field(() => Boolean, { nullable: true })
    name?: true;

    @Field(() => Boolean, { nullable: true })
    thumbnail?: true;

    @Field(() => Boolean, { nullable: true })
    birthdate?: true;

    @Field(() => Boolean, { nullable: true })
    phone?: true;

    @Field(() => Boolean, { nullable: true })
    role?: true;

    @Field(() => Boolean, { nullable: true })
    verified?: true;

    @Field(() => Boolean, { nullable: true })
    verifiedAt?: true;

    @Field(() => Boolean, { nullable: true })
    updatedAt?: true;

    @Field(() => Boolean, { nullable: true })
    password?: true;
}
