import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutNecessitiesInput } from './user-update-without-necessities.input';
import { UserCreateWithoutNecessitiesInput } from './user-create-without-necessities.input';

@InputType()
export class UserUpsertWithoutNecessitiesInput {

    @Field(() => UserUpdateWithoutNecessitiesInput, {nullable:false})
    update!: UserUpdateWithoutNecessitiesInput;

    @Field(() => UserCreateWithoutNecessitiesInput, {nullable:false})
    create!: UserCreateWithoutNecessitiesInput;
}
