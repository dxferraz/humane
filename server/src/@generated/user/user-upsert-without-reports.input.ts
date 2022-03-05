import { Field, InputType } from '@nestjs/graphql';

import { UserCreateWithoutReportsInput } from './user-create-without-reports.input';
import { UserUpdateWithoutReportsInput } from './user-update-without-reports.input';

@InputType()
export class UserUpsertWithoutReportsInput {
    @Field(() => UserUpdateWithoutReportsInput, { nullable: false })
    update!: UserUpdateWithoutReportsInput;

    @Field(() => UserCreateWithoutReportsInput, { nullable: false })
    create!: UserCreateWithoutReportsInput;
}
