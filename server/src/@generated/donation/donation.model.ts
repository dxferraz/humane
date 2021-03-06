import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { Category } from '../category/category.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { DonationCount } from './donation-count.output';

@ObjectType()
export class Donation {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => [Image], {nullable:true})
    thumbnails?: Array<Image>;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    timeStamp!: Date;

    @Field(() => Category, {nullable:false})
    category?: Category;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    zipCode!: string;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => DonationCount, {nullable:false})
    _count?: DonationCount;
}
