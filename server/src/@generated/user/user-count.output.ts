import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserCount {
    @Field(() => Int, { nullable: false })
    reports!: number;

    @Field(() => Int, { nullable: false })
    usersOnChatRoom!: number;

    @Field(() => Int, { nullable: false })
    messages!: number;
}
