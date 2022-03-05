import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateManyReporterInputEnvelope } from './missing-person-create-many-reporter-input-envelope.input';
import { MissingPersonCreateOrConnectWithoutReporterInput } from './missing-person-create-or-connect-without-reporter.input';
import { MissingPersonCreateWithoutReporterInput } from './missing-person-create-without-reporter.input';
import { MissingPersonScalarWhereInput } from './missing-person-scalar-where.input';
import { MissingPersonUpdateManyWithWhereWithoutReporterInput } from './missing-person-update-many-with-where-without-reporter.input';
import { MissingPersonUpdateWithWhereUniqueWithoutReporterInput } from './missing-person-update-with-where-unique-without-reporter.input';
import { MissingPersonUpsertWithWhereUniqueWithoutReporterInput } from './missing-person-upsert-with-where-unique-without-reporter.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@InputType()
export class MissingPersonUncheckedUpdateManyWithoutReporterInput {
    @Field(() => [MissingPersonCreateWithoutReporterInput], { nullable: true })
    create?: Array<MissingPersonCreateWithoutReporterInput>;

    @Field(() => [MissingPersonCreateOrConnectWithoutReporterInput], { nullable: true })
    connectOrCreate?: Array<MissingPersonCreateOrConnectWithoutReporterInput>;

    @Field(() => [MissingPersonUpsertWithWhereUniqueWithoutReporterInput], {
        nullable: true,
    })
    upsert?: Array<MissingPersonUpsertWithWhereUniqueWithoutReporterInput>;

    @Field(() => MissingPersonCreateManyReporterInputEnvelope, { nullable: true })
    createMany?: MissingPersonCreateManyReporterInputEnvelope;

    @Field(() => [MissingPersonWhereUniqueInput], { nullable: true })
    connect?: Array<MissingPersonWhereUniqueInput>;

    @Field(() => [MissingPersonWhereUniqueInput], { nullable: true })
    set?: Array<MissingPersonWhereUniqueInput>;

    @Field(() => [MissingPersonWhereUniqueInput], { nullable: true })
    disconnect?: Array<MissingPersonWhereUniqueInput>;

    @Field(() => [MissingPersonWhereUniqueInput], { nullable: true })
    delete?: Array<MissingPersonWhereUniqueInput>;

    @Field(() => [MissingPersonUpdateWithWhereUniqueWithoutReporterInput], {
        nullable: true,
    })
    update?: Array<MissingPersonUpdateWithWhereUniqueWithoutReporterInput>;

    @Field(() => [MissingPersonUpdateManyWithWhereWithoutReporterInput], {
        nullable: true,
    })
    updateMany?: Array<MissingPersonUpdateManyWithWhereWithoutReporterInput>;

    @Field(() => [MissingPersonScalarWhereInput], { nullable: true })
    deleteMany?: Array<MissingPersonScalarWhereInput>;
}
