import { Field, InputType } from '@nestjs/graphql';

import { MessageScalarWhereInput } from './message-scalar-where.input';
import { MessageUpdateManyMutationInput } from './message-update-many-mutation.input';

@InputType()
export class MessageUpdateManyWithWhereWithoutChatRoomInput {
    @Field(() => MessageScalarWhereInput, { nullable: false })
    where!: MessageScalarWhereInput;

    @Field(() => MessageUpdateManyMutationInput, { nullable: false })
    data!: MessageUpdateManyMutationInput;
}
