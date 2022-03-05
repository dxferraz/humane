import { Field, HideField, ID, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType({})
export class User {
    @Field(() => ID, {
        nullable: false,
    })
    id!: number;

    @Field(() => String, {
        nullable: false,
    })
    email!: string;

    @Field(() => String, {
        nullable: false,
    })
    name!: string;

    @HideField()
    password!: string;

    @Field(() => String, {
        nullable: true,
    })
    role?: Role;

    @Field(() => String, {
        nullable: true,
    })
    phone?: string;

    @Field(() => [User], {
        nullable: true,
    })
    birthdate?: Date;

    @Field(() => [User], {
        nullable: true,
    })
    thumbnail?: string;
}
