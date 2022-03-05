import { ArgsType, Field } from '@nestjs/graphql';

import { ImageWhereInput } from './image-where.input';

@ArgsType()
export class DeleteManyImageArgs {
    @Field(() => ImageWhereInput, { nullable: true })
    where?: ImageWhereInput;
}
