import { registerEnumType } from '@nestjs/graphql';

export enum EyeColor {
    GREEN = "GREEN",
    HAZEL = "HAZEL",
    BLUE = "BLUE",
    BROWN = "BROWN",
    GREYOROTHER = "GREYOROTHER"
}


registerEnumType(EyeColor, { name: 'EyeColor', description: undefined })
