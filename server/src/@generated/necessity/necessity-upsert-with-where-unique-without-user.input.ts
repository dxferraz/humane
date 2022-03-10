import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithoutUserInput } from './necessity-update-without-user.input';
import { NecessityCreateWithoutUserInput } from './necessity-create-without-user.input';

@InputType()
export class NecessityUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => NecessityWhereUniqueInput, {nullable:false})
    where!: NecessityWhereUniqueInput;

    @Field(() => NecessityUpdateWithoutUserInput, {nullable:false})
    update!: NecessityUpdateWithoutUserInput;

    @Field(() => NecessityCreateWithoutUserInput, {nullable:false})
    create!: NecessityCreateWithoutUserInput;
}
