import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
