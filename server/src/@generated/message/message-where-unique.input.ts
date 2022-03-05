import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class MessageWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
