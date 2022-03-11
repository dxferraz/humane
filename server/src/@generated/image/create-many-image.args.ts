import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageCreateManyInput } from './image-create-many.input';

@ArgsType()
export class CreateManyImageArgs {

    @Field(() => [ImageCreateManyInput], {nullable:false})
    data!: Array<ImageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
