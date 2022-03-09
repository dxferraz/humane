import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';

@ArgsType()
export class DeleteManyImageArgs {

    @Field(() => ImageWhereInput, {nullable:true})
    where?: ImageWhereInput;
}
