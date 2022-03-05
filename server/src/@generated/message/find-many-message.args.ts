import { ArgsType, Field, Int } from '@nestjs/graphql';

import { MessageOrderByWithRelationInput } from './message-order-by-with-relation.input';
import { MessageScalarFieldEnum } from './message-scalar-field.enum';
import { MessageWhereInput } from './message-where.input';
import { MessageWhereUniqueInput } from './message-where-unique.input';

@ArgsType()
export class FindManyMessageArgs {
    @Field(() => MessageWhereInput, { nullable: true })
    where?: MessageWhereInput;

    @Field(() => [MessageOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<MessageOrderByWithRelationInput>;

    @Field(() => MessageWhereUniqueInput, { nullable: true })
    cursor?: MessageWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [MessageScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof MessageScalarFieldEnum>;
}
