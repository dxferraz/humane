import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CategoryUpdateManyMutationInput {

    @Field(() => String, {nullable:true})
    title?: string;
}
