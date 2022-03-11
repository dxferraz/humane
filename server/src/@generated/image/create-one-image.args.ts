import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageCreateInput } from './image-create.input';

@ArgsType()
export class CreateOneImageArgs {

    @Field(() => ImageCreateInput, {nullable:false})
    data!: ImageCreateInput;
}
