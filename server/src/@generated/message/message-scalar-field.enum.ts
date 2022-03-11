import { registerEnumType } from '@nestjs/graphql';

export enum MessageScalarFieldEnum {
    id = "id",
    message = "message",
    timeStamp = "timeStamp",
    authorId = "authorId",
    chatRoomId = "chatRoomId"
}


registerEnumType(MessageScalarFieldEnum, { name: 'MessageScalarFieldEnum', description: undefined })
