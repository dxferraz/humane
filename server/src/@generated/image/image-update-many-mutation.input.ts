import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    url?: string;
}
