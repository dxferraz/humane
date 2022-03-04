import { ArgsType, Field } from '@nestjs/graphql';

import { ImageUpdateInput } from './image-update.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class UpdateOneImageArgs {
    @Field(() => ImageUpdateInput, { nullable: false })
    data!: ImageUpdateInput;

    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;
}
