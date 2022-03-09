import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    email = "email",
    name = "name",
    thumbnail = "thumbnail",
    birthdate = "birthdate",
    phone = "phone",
    role = "role",
    emailVerified = "emailVerified",
    emailVerifiedAt = "emailVerifiedAt",
    profileVerified = "profileVerified",
    profileVerifiedAt = "profileVerifiedAt",
    updatedAt = "updatedAt",
    password = "password"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
