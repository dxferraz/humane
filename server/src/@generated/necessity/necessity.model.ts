import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { Category } from '../category/category.model';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { NecessityCount } from './necessity-count.output';

@ObjectType()
export class Necessity {

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

    @Field(() => NecessityCount, {nullable:true})
    _count?: NecessityCount | null;
}
