import { Field, InputType } from '@nestjs/graphql';

import { UserCreateOrConnectWithoutReportsInput } from './user-create-or-connect-without-reports.input';
import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReportsInput {
    @Field(() => UserCreateWithoutReportsInput, { nullable: true })
    create?: UserCreateWithoutReportsInput;

    @Field(() => UserCreateOrConnectWithoutReportsInput, { nullable: true })
    connectOrCreate?: UserCreateOrConnectWithoutReportsInput;

    @Field(() => UserWhereUniqueInput, { nullable: true })
    connect?: UserWhereUniqueInput;
}
