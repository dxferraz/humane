import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MissingPersonOrderByWithRelationInput } from './missing-person-order-by-with-relation.input';
import { MissingPersonScalarFieldEnum } from './missing-person-scalar-field.enum';
import { MissingPersonWhereInput } from './missing-person-where.input';
import { MissingPersonWhereUniqueInput } from './missing-person-where-unique.input';

@ArgsType()
export class FindManyMissingPersonArgs {
    @Field(() => MissingPersonWhereInput, { nullable: true })
    where?: MissingPersonWhereInput;

    @Field(() => [MissingPersonOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<MissingPersonOrderByWithRelationInput>;

    @Field(() => MissingPersonWhereUniqueInput, { nullable: true })
    cursor?: MissingPersonWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [MissingPersonScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof MissingPersonScalarFieldEnum>;
}
