import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImageUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => Int, {nullable:true})
    missingPersonId?: number;

    @Field(() => Int, {nullable:true})
    donationId?: number;

    @Field(() => Int, {nullable:true})
    necessityId?: number;
}
