import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNecessitiesInput } from './user-create-without-necessities.input';
import { UserCreateOrConnectWithoutNecessitiesInput } from './user-create-or-connect-without-necessities.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNecessitiesInput {

    @Field(() => UserCreateWithoutNecessitiesInput, {nullable:true})
    create?: UserCreateWithoutNecessitiesInput;

    @Field(() => UserCreateOrConnectWithoutNecessitiesInput, {nullable:true})
    connectOrCreate?: UserCreateOrConnectWithoutNecessitiesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    connect?: UserWhereUniqueInput;
}
