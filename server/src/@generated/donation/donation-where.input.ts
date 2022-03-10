import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { ImageListRelationFilter } from '../image/image-list-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CategoryRelationFilter } from '../category/category-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class DonationWhereInput {

    @Field(() => [DonationWhereInput], {nullable:true})
    AND?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    OR?: Array<DonationWhereInput>;

    @Field(() => [DonationWhereInput], {nullable:true})
    NOT?: Array<DonationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => ImageListRelationFilter, {nullable:true})
    thumbnails?: ImageListRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    timeStamp?: DateTimeFilter;

    @Field(() => CategoryRelationFilter, {nullable:true})
    category?: CategoryRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    categoryId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    zipCode?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    User?: UserRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;
}
