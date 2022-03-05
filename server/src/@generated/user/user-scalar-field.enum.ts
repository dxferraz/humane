import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = 'id',
    createdAt = 'createdAt',
    email = 'email',
    name = 'name',
    thumbnail = 'thumbnail',
    birthdate = 'birthdate',
    phone = 'phone',
    role = 'role',
    verified = 'verified',
    verifiedAt = 'verifiedAt',
    updatedAt = 'updatedAt',
    password = 'password',
}

registerEnumType(UserScalarFieldEnum, {
    name: 'UserScalarFieldEnum',
    description: undefined,
});
