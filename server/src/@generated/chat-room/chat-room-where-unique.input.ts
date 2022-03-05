import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ChatRoomWhereUniqueInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
