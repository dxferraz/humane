import { ArgsType, Field, Int } from '@nestjs/graphql';

import { ImageOrderByWithRelationInput } from './image-order-by-with-relation.input';
import { ImageScalarFieldEnum } from './image-scalar-field.enum';
import { ImageWhereInput } from './image-where.input';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class FindFirstImageArgs {
    @Field(() => ImageWhereInput, { nullable: true })
    where?: ImageWhereInput;

    @Field(() => [ImageOrderByWithRelationInput], { nullable: true })
    orderBy?: Array<ImageOrderByWithRelationInput>;

    @Field(() => ImageWhereUniqueInput, { nullable: true })
    cursor?: ImageWhereUniqueInput;

    @Field(() => Int, { nullable: true })
    take?: number;

    @Field(() => Int, { nullable: true })
    skip?: number;

    @Field(() => [ImageScalarFieldEnum], { nullable: true })
    distinct?: Array<keyof typeof ImageScalarFieldEnum>;
}
