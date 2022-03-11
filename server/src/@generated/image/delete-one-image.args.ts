import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class DeleteOneImageArgs {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    where!: ImageWhereUniqueInput;
}
