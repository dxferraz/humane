import { ArgsType, Field } from '@nestjs/graphql';

import { ImageCreateInput } from './image-create.input';
import { ImageUpdateInput } from './image-update.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class UpsertOneImageArgs {
    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateInput, { nullable: false })
    create!: ImageCreateInput;

    @Field(() => ImageUpdateInput, { nullable: false })
    update!: ImageUpdateInput;
}
