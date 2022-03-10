import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { MissingPersonUncheckedCreateNestedManyWithoutReporterInput } from '../missing-person/missing-person-unchecked-create-nested-many-without-reporter.input';
import { MessageUncheckedCreateNestedManyWithoutAuthorInput } from '../message/message-unchecked-create-nested-many-without-author.input';
import { DonationUncheckedCreateNestedManyWithoutUserInput } from '../donation/donation-unchecked-create-nested-many-without-user.input';
import { NecessityUncheckedCreateNestedManyWithoutUserInput } from '../necessity/necessity-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutUsersOnChatRoomInput {

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

    @Field(() => MissingPersonUncheckedCreateNestedManyWithoutReporterInput, {nullable:true})
    reports?: MissingPersonUncheckedCreateNestedManyWithoutReporterInput;

    @Field(() => MessageUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    messages?: MessageUncheckedCreateNestedManyWithoutAuthorInput;

    @Field(() => DonationUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput;

    @Field(() => NecessityUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    necessities?: NecessityUncheckedCreateNestedManyWithoutUserInput;
}
