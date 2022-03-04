import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ChatRoomUncheckedUpdateManyInput {
    @Field(() => Int, { nullable: true })
    id?: number;
}
