import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ImageMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    missingPersonId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    donationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    necessityId?: keyof typeof SortOrder;
}
