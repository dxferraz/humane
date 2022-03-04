import { ArgsType, Field } from '@nestjs/graphql';

import { ImageCreateManyInput } from './image-create-many.input';

@ArgsType()
export class CreateManyImageArgs {
    @Field(() => [ImageCreateManyInput], { nullable: false })
    data!: Array<ImageCreateManyInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
