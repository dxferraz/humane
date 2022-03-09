import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageOrderByRelationAggregateInput } from '../image/image-order-by-relation-aggregate.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class MissingPersonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => ImageOrderByRelationAggregateInput, {nullable:true})
    thumbnails?: ImageOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    height?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    skin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    reporter?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    reporterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    disappearanceDay?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    eyeColor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    hairColor?: keyof typeof SortOrder;
}
