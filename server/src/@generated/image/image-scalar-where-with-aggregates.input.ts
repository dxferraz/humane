import { Field, InputType } from '@nestjs/graphql';

import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ImageScalarWhereWithAggregatesInput {
    @Field(() => [ImageScalarWhereWithAggregatesInput], { nullable: true })
    AND?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => [ImageScalarWhereWithAggregatesInput], { nullable: true })
    OR?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => [ImageScalarWhereWithAggregatesInput], { nullable: true })
    NOT?: Array<ImageScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, { nullable: true })
    url?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, { nullable: true })
    missingPersonId?: IntWithAggregatesFilter;
}
