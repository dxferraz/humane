import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';
import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';

@InputType()
export class MissingPersonCreateOrConnectWithoutReporterInput {

    @Field(() => MissingPersonWhereUniqueInput, {nullable:false})
    where!: MissingPersonWhereUniqueInput;

    @Field(() => MissingPersonCreateWithoutReporterInput, {nullable:false})
    create!: MissingPersonCreateWithoutReporterInput;
}
