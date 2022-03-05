import { ArgsType, Field } from '@nestjs/graphql';

import { ImageUpdateManyMutationInput } from './image-update-many-mutation.input';
import { ImageWhereInput } from './image-where.input';

@ArgsType()
export class UpdateManyImageArgs {
    @Field(() => ImageUpdateManyMutationInput, { nullable: false })
    data!: ImageUpdateManyMutationInput;

    @Field(() => ImageWhereInput, { nullable: true })
    where?: ImageWhereInput;
}
