import { registerEnumType } from '@nestjs/graphql';

export enum ChatRoomScalarFieldEnum {
    id = "id"
}


registerEnumType(ChatRoomScalarFieldEnum, { name: 'ChatRoomScalarFieldEnum', description: undefined })
