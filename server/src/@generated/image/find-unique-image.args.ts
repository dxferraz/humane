import { ArgsType, Field } from '@nestjs/graphql';

import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class FindUniqueImageArgs {
    @Field(() => ImageWhereUniqueInput, { nullable: false })
    where!: ImageWhereUniqueInput;
}
