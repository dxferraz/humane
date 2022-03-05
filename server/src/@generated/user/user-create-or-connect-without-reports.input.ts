import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateOrConnectWithoutReportsInput {
    @Field(() => UserWhereUniqueInput, { nullable: false })
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutReportsInput, { nullable: false })
    create!: UserCreateWithoutReportsInput;
}
