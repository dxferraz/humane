import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomCreateManyInput } from './chat-room-create-many.input';

@ArgsType()
export class CreateManyChatRoomArgs {

    @Field(() => [ChatRoomCreateManyInput], {nullable:false})
    data!: Array<ChatRoomCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
