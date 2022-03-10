import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityCreateWithoutUserInput } from './necessity-create-without-user.input';

@InputType()
export class NecessityCreateOrConnectWithoutUserInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityCreateWithoutUserInput, {nullable:false})
    create!: NecessityCreateWithoutUserInput;
}
