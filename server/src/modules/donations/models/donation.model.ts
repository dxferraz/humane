import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Image } from './image.model';
import { Category } from './category.model';
import { Int } from '@nestjs/graphql';
import { User } from 'src/modules/user/models/user.model';

@ObjectType()
export class Donation {
    @Field(() => [Image], { nullable: true })
    thumbnails?: Array<Image>;

    @Field(() => String, { nullable: false })
    title!: string;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => Date, { nullable: false })
    timeStamp!: Date;

    @Field(() => Category, { nullable: false })
    category?: Category;

    @Field(() => Int, { nullable: false })
    categoryId!: number;

    @Field(() => String, { nullable: false })
    address!: string;

    @Field(() => String, { nullable: false })
    zipCode!: string;

    @Field(() => User, { nullable: false })
    user!: User;
}
