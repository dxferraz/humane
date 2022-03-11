import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithoutUserInput } from './necessity-update-without-user.input';

@InputType()
export class NecessityUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityUpdateWithoutUserInput, {nullable:false})
    data!: NecessityUpdateWithoutUserInput;
}
