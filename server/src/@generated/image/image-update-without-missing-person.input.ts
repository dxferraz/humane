import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageUpdateWithoutMissingPersonInput {
    @Field(() => String, { nullable: true })
    url?: string;
}
