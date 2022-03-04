import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageCreateManyMissingPersonInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    url!: string;
}
