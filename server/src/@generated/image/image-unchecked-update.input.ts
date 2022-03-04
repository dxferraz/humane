import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ImageUncheckedUpdateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: true })
    url?: string;

    @Field(() => Int, { nullable: true })
    missingPersonId?: number;
}
