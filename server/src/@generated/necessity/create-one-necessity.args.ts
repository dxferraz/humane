import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityCreateInput } from './necessity-create.input';

@ArgsType()
export class CreateOneNecessityArgs {

    @Field(() => NecessityCreateInput, {nullable:false})
    data!: NecessityCreateInput;
}
