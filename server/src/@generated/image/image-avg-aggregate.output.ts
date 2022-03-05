import { Field, Float, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageAvgAggregate {
    @Field(() => Float, { nullable: true })
    id?: number;

    @Field(() => Float, { nullable: true })
    missingPersonId?: number;
}
