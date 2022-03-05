import { Field, InputType } from '@nestjs/graphql';

import { ImageScalarWhereInput } from './image-scalar-where.input';
import { ImageUpdateManyMutationInput } from './image-update-many-mutation.input';

@InputType()
export class ImageUpdateManyWithWhereWithoutMissingPersonInput {
    @Field(() => ImageScalarWhereInput, { nullable: false })
    where!: ImageScalarWhereInput;

    @Field(() => ImageUpdateManyMutationInput, { nullable: false })
    data!: ImageUpdateManyMutationInput;
}
