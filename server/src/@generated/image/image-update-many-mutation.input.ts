import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ImageUpdateManyMutationInput {
    @Field(() => String, { nullable: true })
    url?: string;
}
