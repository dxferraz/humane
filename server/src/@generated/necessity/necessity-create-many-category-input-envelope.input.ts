import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NecessityCreateManyCategoryInput } from './necessity-create-many-category.input';

@InputType()
export class NecessityCreateManyCategoryInputEnvelope {

    @Field(() => [NecessityCreateManyCategoryInput], {nullable:false})
    data!: Array<NecessityCreateManyCategoryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
