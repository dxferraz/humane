import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ImageMinAggregate {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    url?: string;

    @Field(() => Int, { nullable: true })
    missingPersonId?: number;
}
