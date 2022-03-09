import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserCreateWithoutNecessitiesInput } from './user-create-without-necessities.input';

@InputType()
export class UserCreateOrConnectWithoutNecessitiesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutNecessitiesInput, {nullable:false})
    create!: UserCreateWithoutNecessitiesInput;
}
