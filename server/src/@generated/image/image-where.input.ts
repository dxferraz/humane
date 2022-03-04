import { Field, InputType } from '@nestjs/graphql';

import { MissingPersonRelationFilter } from '../missing-person/missing-person-relation-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ImageWhereInput {
    @Field(() => [ImageWhereInput], { nullable: true })
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], { nullable: true })
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], { nullable: true })
    NOT?: Array<ImageWhereInput>;

    @Field(() => IntFilter, { nullable: true })
    id?: IntFilter;

    @Field(() => StringFilter, { nullable: true })
    url?: StringFilter;

    @Field(() => MissingPersonRelationFilter, { nullable: true })
    MissingPerson?: MissingPersonRelationFilter;

    @Field(() => IntFilter, { nullable: true })
    missingPersonId?: IntFilter;
}
