import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MissingPersonWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
