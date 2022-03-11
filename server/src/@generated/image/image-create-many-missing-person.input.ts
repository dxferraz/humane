import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ImageCreateManyMissingPersonInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    url!: string;

    @Field(() => Int, {nullable:true})
    donationId?: number;

    @Field(() => Int, {nullable:true})
    necessityId?: number;
}
