import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityWhereInput } from './necessity-where.input';

@ArgsType()
export class DeleteManyNecessityArgs {

    @Field(() => NecessityWhereInput, {nullable:true})
    where?: NecessityWhereInput;
}
