import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = 'id',
    url = 'url',
    missingPersonId = 'missingPersonId',
}

registerEnumType(ImageScalarFieldEnum, {
    name: 'ImageScalarFieldEnum',
    description: undefined,
});
