import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateWithoutUserInput } from './necessity-create-without-user.input';
import { NecessityCreateOrConnectWithoutUserInput } from './necessity-create-or-connect-without-user.input';
import { NecessityUpsertWithWhereUniqueWithoutUserInput } from './necessity-upsert-with-where-unique-without-user.input';
import { NecessityCreateManyUserInputEnvelope } from './necessity-create-many-user-input-envelope.input';
import { NecessityWhereUniqueInput } from './necessity-where-unique.input';
import { NecessityUpdateWithWhereUniqueWithoutUserInput } from './necessity-update-with-where-unique-without-user.input';
import { NecessityUpdateManyWithWhereWithoutUserInput } from './necessity-update-many-with-where-without-user.input';
import { NecessityScalarWhereInput } from './necessity-scalar-where.input';

@InputType()
export class NecessityUncheckedUpdateManyWithoutUserInput {

    @Field(() => [NecessityCreateWithoutUserInput], {nullable:true})
    create?: Array<NecessityCreateWithoutUserInput>;

    @Field(() => [NecessityCreateOrConnectWithoutUserInput], {nullable:true})
    connectOrCreate?: Array<NecessityCreateOrConnectWithoutUserInput>;

    @Field(() => [NecessityUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    upsert?: Array<NecessityUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => NecessityCreateManyUserInputEnvelope, {nullable:true})
    createMany?: NecessityCreateManyUserInputEnvelope;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    set?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    disconnect?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    delete?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityWhereUniqueInput], {nullable:true})
    connect?: Array<NecessityWhereUniqueInput>;

    @Field(() => [NecessityUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    update?: Array<NecessityUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [NecessityUpdateManyWithWhereWithoutUserInput], {nullable:true})
    updateMany?: Array<NecessityUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [NecessityScalarWhereInput], {nullable:true})
    deleteMany?: Array<NecessityScalarWhereInput>;
}
