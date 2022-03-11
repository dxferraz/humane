import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonCreateInput } from './missing-person-create.input';

@ArgsType()
export class CreateOneMissingPersonArgs {

    @Field(() => MissingPersonCreateInput, {nullable:false})
    data!: MissingPersonCreateInput;
}
