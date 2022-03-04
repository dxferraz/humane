import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageSumAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => Int, { nullable: true })
    missingPersonId?: number;
}
