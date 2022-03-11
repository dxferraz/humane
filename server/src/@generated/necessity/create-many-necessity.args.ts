import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NecessityCreateManyInput } from './necessity-create-many.input';

@ArgsType()
export class CreateManyNecessityArgs {

    @Field(() => [NecessityCreateManyInput], {nullable:false})
    data!: Array<NecessityCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
