import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    timeStamp = "timeStamp",
    categoryId = "categoryId",
    address = "address",
    zipCode = "zipCode",
    userId = "userId"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
