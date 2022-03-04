import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';
import { MissingPersonUpdateWithoutReporterInput } from './missing-person-update-without-reporter.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonUpsertWithWhereUniqueWithoutReporterInput {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonUpdateWithoutReporterInput, { nullable: false })
    update!: MissingPersonUpdateWithoutReporterInput;

    @Field(() => MissingPersonCreateWithoutReporterInput, { nullable: false })
    create!: MissingPersonCreateWithoutReporterInput;
}
