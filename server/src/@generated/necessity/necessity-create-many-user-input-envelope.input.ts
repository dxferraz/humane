import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateManyUserInput } from './necessity-create-many-user.input';

@InputType()
export class NecessityCreateManyUserInputEnvelope {

    @Field(() => [NecessityCreateManyUserInput], {nullable:false})
    data!: Array<NecessityCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
