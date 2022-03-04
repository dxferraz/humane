import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageCreateWithoutMissingPersonInput {
    @Field(() => String, { nullable: false })
    url!: string;
}
