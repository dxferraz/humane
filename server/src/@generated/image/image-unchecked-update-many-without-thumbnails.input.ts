import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageUncheckedUpdateManyWithoutThumbnailsInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    url?: string;
}
