import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonCreateManyReporterInput } from './missing-person-create-many-reporter.input';

@InputType()
export class MissingPersonCreateManyReporterInputEnvelope {
    @Field(() => [MissingPersonCreateManyReporterInput], { nullable: false })
    data!: Array<MissingPersonCreateManyReporterInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
