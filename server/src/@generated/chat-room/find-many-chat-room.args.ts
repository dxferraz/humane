import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChatRoomWhereInput } from './chat-room-where.input';
import { ChatRoomOrderByWithRelationInput } from './chat-room-order-by-with-relation.input';
import { ChatRoomWhereUniqueInput } from './chat-room-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChatRoomScalarFieldEnum } from './chat-room-scalar-field.enum';

@ArgsType()
export class FindManyChatRoomArgs {

    @Field(() => ChatRoomWhereInput, {nullable:true})
    where?: ChatRoomWhereInput;

    @Field(() => [ChatRoomOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChatRoomOrderByWithRelationInput>;

    @Field(() => ChatRoomWhereUniqueInput, {nullable:true})
    cursor?: ChatRoomWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChatRoomScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChatRoomScalarFieldEnum>;
}
