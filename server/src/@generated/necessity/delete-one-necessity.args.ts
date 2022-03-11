import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';

@ArgsType()
export class DeleteOneNecessityArgs {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;
}
