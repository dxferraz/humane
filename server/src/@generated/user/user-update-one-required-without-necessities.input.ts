import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNecessitiesInput } from './user-create-without-necessities.input';
import { UserCreateOrConnectWithoutNecessitiesInput } from './user-create-or-connect-without-necessities.input';
import { UserUpsertWithoutNecessitiesInput } from './user-upsert-without-necessities.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutNecessitiesInput } from './user-update-without-necessities.input';

@InputType()
export class UserUpdateOneRequiredWithoutNecessitiesInput {

    @Field(() => UserCreateWithoutNecessitiesInput, {nullable:true})
    create?: UserCreateWithoutNecessitiesInput;

    @Field(() => UserCreateOrConnectWithoutNecessitiesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutNecessitiesInput;

    @Field(() => UserUpsertWithoutNecessitiesInput, {nullable:true})
    upsert?: UserUpsertWithoutNecessitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutNecessitiesInput, {nullable:true})
    update?: UserUpdateWithoutNecessitiesInput;
}
