import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {
    @Field(() => String, { nullable: false })
    url!: string;
}
