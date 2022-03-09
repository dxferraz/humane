import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonUpdateManyMutationInput } from './missing-person-update-many-mutation.input';
import { MissingPersonWhereInput } from './missing-person-where.input';

@ArgsType()
export class UpdateManyMissingPersonArgs {

    @Field(() => MissingPersonUpdateManyMutationInput, {nullable:false})
    data!: MissingPersonUpdateManyMutationInput;

    @Field(() => MissingPersonWhereInput, {nullable:true})
    where?: MissingPersonWhereInput;
}
