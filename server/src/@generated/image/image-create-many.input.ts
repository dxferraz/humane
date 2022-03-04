import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageCreateManyInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    url!: string;

    @Field(() => Int, { nullable: true })
    missingPersonId?: number;
}
