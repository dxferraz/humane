import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MissingPersonCount {

    @Field(() => Int, {nullable:false})
    thumbnails?: number;
}
