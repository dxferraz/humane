import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MissingPersonCreateManyInput } from './missing-person-create-many.input';

@ArgsType()
export class CreateManyMissingPersonArgs {

    @Field(() => [MissingPersonCreateManyInput], {nullable:false})
    data!: Array<MissingPersonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
