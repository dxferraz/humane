import { registerEnumType } from '@nestjs/graphql';

export enum ImageScalarFieldEnum {
    id = "id",
    url = "url",
    missingPersonId = "missingPersonId",
    donationId = "donationId",
    necessityId = "necessityId"
}


registerEnumType(ImageScalarFieldEnum, { name: 'ImageScalarFieldEnum', description: undefined })
