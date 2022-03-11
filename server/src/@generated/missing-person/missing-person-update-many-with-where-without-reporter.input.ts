import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MissingPersonScalarWhereInput } from './missing-person-scalar-where.input';
import { MissingPersonUpdateManyMutationInput } from './missing-person-update-many-mutation.input';

@InputType()
export class MissingPersonUpdateManyWithWhereWithoutReporterInput {

    @Field(() => MissingPersonScalarWhereInput, {nullable:false})
    where!: MissingPersonScalarWhereInput;

    @Field(() => MissingPersonUpdateManyMutationInput, {nullable:false})
    data!: MissingPersonUpdateManyMutationInput;
}
