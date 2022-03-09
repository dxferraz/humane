import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonUpdateWithoutReporterInput } from './missing-person-update-without-reporter.input';

@InputType()
export class MissingPersonUpdateWithWhereUniqueWithoutReporterInput {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonUpdateWithoutReporterInput, {nullable:false})
    data!: MissingPersonUpdateWithoutReporterInput;
}
