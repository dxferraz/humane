import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { MissingPersonRelationFilter } from '../missing-person/missing-person-relation-filter.input';
import { DonationRelationFilter } from '../donation/donation-relation-filter.input';
import { NecessityRelationFilter } from '../necessity/necessity-relation-filter.input';

@InputType()
export class ImageWhereInput {

    @Field(() => [ImageWhereInput], {nullable:true})
    AND?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    OR?: Array<ImageWhereInput>;

    @Field(() => [ImageWhereInput], {nullable:true})
    NOT?: Array<ImageWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => MissingPersonRelationFilter, {nullable:true})
    MissingPerson?: MissingPersonRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    missingPersonId?: IntFilter;

    @Field(() => DonationRelationFilter, {nullable:true})
    Donation?: DonationRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    donationId?: IntFilter;

    @Field(() => NecessityRelationFilter, {nullable:true})
    Necessity?: NecessityRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    necessityId?: IntFilter;
}
