import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;

    @Field(() => Date, {nullable:true})
    birthdate?: Date | string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    emailVerified?: boolean;

    @Field(() => Date, {nullable:true})
    emailVerifiedAt?: Date | string;

    @Field(() => Boolean, {nullable:true})
    profileVerified?: boolean;

    @Field(() => Date, {nullable:true})
    profileVerifiedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    password!: string;
}
