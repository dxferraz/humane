import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonUpdateWithoutReporterInput } from './missing-person-update-without-reporter.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonUpdateWithWhereUniqueWithoutReporterInput {
    @Field(() => MissingPersonWhereUniqueInput, { nullable: false })
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonUpdateWithoutReporterInput, { nullable: false })
    data!: MissingPersonUpdateWithoutReporterInput;
}
