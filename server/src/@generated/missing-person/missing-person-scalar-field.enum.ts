import { registerEnumType } from '@nestjs/graphql';

export enum MissingPersonScalarFieldEnum {
    id = "id",
    name = "name",
    age = "age",
    height = "height",
    skin = "skin",
    description = "description",
    reporterId = "reporterId",
    disappearanceDay = "disappearanceDay",
    eyeColor = "eyeColor",
    hairColor = "hairColor"
}


registerEnumType(MissingPersonScalarFieldEnum, { name: 'MissingPersonScalarFieldEnum', description: undefined })
