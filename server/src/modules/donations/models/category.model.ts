import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Category {
    @Field(() => String, { nullable: false })
    title!: string;
}
