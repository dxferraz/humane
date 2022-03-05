import { Prisma, Role } from '@prisma/client';

type UserPayload = Prisma.UserGetPayload<true>;

export function createUser(parts: Partial<UserPayload> = {}): UserPayload {
    return {
        id: 1,
        email: 'user_email',
        name: 'user_name',
        password: 'user_password123ER@##',
        birthdate: new Date('08-10-2020'),
        thumbnail: '',
        phone: '123123123',
        createdAt: new Date(),
        role: Role.USER,
        verified: true,
        verifiedAt: new Date(),
        updatedAt: new Date(),
        ...parts,
    };
}
