import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageUpdateManyMutationInput } from './image-update-many-mutation.input';
import { ImageWhereInput } from './image-where.input';

@ArgsType()
export class UpdateManyImageArgs {

    @Field(() => ImageUpdateManyMutationInput, {nullable:false})
    data!: ImageUpdateManyMutationInput;

    @Field(() => ImageWhereInput, {nullable:true})
    where?: ImageWhereInput;
}
