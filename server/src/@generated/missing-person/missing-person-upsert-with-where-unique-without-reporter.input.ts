import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonUpdateWithoutReporterInput } from './missing-person-update-without-reporter.input';
import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';

@InputType()
export class MissingPersonUpsertWithWhereUniqueWithoutReporterInput {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonUpdateWithoutReporterInput, {nullable:false})
    update!: MissingPersonUpdateWithoutReporterInput;

    @Field(() => MissingPersonCreateWithoutReporterInput, {nullable:false})
    create!: MissingPersonCreateWithoutReporterInput;
}
