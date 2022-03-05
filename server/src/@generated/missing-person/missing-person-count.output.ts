import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class MissingPersonCount {
    @Field(() => Int, { nullable: false })
    thumbnails!: number;
}
