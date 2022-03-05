import { registerEnumType } from '@nestjs/graphql';

export enum UsersOnChatRoomScalarFieldEnum {
    userId = 'userId',
    chatRoomId = 'chatRoomId',
    createdAt = 'createdAt',
}

registerEnumType(UsersOnChatRoomScalarFieldEnum, {
    name: 'UsersOnChatRoomScalarFieldEnum',
    description: undefined,
});
