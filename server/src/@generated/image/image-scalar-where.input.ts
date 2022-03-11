import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ImageScalarWhereInput {

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    AND?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    OR?: Array<ImageScalarWhereInput>;

    @Field(() => [ImageScalarWhereInput], {nullable:true})
    NOT?: Array<ImageScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    url?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    missingPersonId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    donationId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    necessityId?: IntFilter;
}
