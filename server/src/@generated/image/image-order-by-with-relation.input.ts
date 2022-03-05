import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonOrderByWithRelationInput } from '../missing-person/missing-person-order-by-with-relation.input';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImageOrderByWithRelationInput {
    @Field(() => SortOrder, { nullable: true })
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, { nullable: true })
    url?: keyof typeof SortOrder;

    @Field(() => MissingPersonOrderByWithRelationInput, { nullable: true })
    MissingPerson?: MissingPersonOrderByWithRelationInput;

    @Field(() => SortOrder, { nullable: true })
    missingPersonId?: keyof typeof SortOrder;
}
