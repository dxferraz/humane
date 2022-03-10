import { registerEnumType } from '@nestjs/graphql';

export enum HairColor {
    BALCK = "BALCK",
    BROWN = "BROWN",
    RED = "RED",
    BLOND = "BLOND",
    GRAY = "GRAY",
    WHITE = "WHITE",
    OTHER = "OTHER"
}


registerEnumType(HairColor, { name: 'HairColor', description: undefined })
