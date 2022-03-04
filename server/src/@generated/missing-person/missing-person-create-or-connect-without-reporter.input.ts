import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonCreateOrConnectWithoutReporterInput {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateWithoutReporterInput, { nullable: false })
    create!: MissingPersonCreateWithoutReporterInput;
}
