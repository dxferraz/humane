import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyNecessityInput } from './image-create-many-necessity.input';

@InputType()
export class ImageCreateManyNecessityInputEnvelope {

    @Field(() => [ImageCreateManyNecessityInput], {nullable:false})
    data!: Array<ImageCreateManyNecessityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
