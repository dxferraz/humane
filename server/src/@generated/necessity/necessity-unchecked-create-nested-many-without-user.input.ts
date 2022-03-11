import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutUserInput } from './necessity-create-without-user.input';
import { NecessityCreateOrConnectWithoutUserInput } from './necessity-create-or-connect-without-user.input';
import { NecessityCreateManyUserInputEnvelope } from './necessity-create-many-user-input-envelope.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';

@InputType()
export class NecessityUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [NecessityCreateWithoutUserInput], {nullable:true})
    create?: Array<NecessityCreateWithoutUserInput>;

    @Field(() => [NecessityCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<NecessityCreateOrConnectWithoutUserInput>;

    @Field(() => NecessityCreateManyUserInputEnvelope, {nullable:true})
    createMany?: NecessityCreateManyUserInputEnvelope;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    connect?: Array<NecessityWhereUniqueInput>;
}
