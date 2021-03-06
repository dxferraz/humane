import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';
import { MissingPersonCreateOrConnectWithoutReporterInput } from './missing-person-create-or-connect-without-reporter.input';
import { MissingPersonCreateManyReporterInputEnvelope } from './missing-person-create-many-reporter-input-envelope.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonUncheckedCreateNestedManyWithoutReporterInput {

    @Field(() => [MissingPersonCreateWithoutReporterInput], {nullable:true})
    create?: Array<MissingPersonCreateWithoutReporterInput>;

    @Field(() => [MissingPersonCreateOrConnectWithoutReporterInput], {nullable:true})
    connectOrCreate?: Array<MissingPersonCreateOrConnectWithoutReporterInput>;

    @Field(() => MissingPersonCreateManyReporterInputEnvelope, {nullable:true})
    createMany?: MissingPersonCreateManyReporterInputEnvelope;

    @Field(() => [MissingPersonWhereUniqueInput], {nullable:true})
    connect?: Array<MissingPersonWhereUniqueInput>;
}
