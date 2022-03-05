import { registerEnumType } from '@nestjs/graphql';

export enum Skin {
    PALE = 'PALE',
    WHITE = 'WHITE',
    TANNED = 'TANNED',
    BROWN = 'BROWN',
    BLACK = 'BLACK',
}

registerEnumType(Skin, { name: 'Skin', description: undefined });
