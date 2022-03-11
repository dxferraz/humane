import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NecessityScalarWhereInput {

    @Field(() => [NecessityScalarWhereInput], {nullable:true})
    AND?: Array<NecessityScalarWhereInput>;

    @Field(() => [NecessityScalarWhereInput], {nullable:true})
    OR?: Array<NecessityScalarWhereInput>;

    @Field(() => [NecessityScalarWhereInput], {nullable:true})
    NOT?: Array<NecessityScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timeStamp?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zipCode?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
