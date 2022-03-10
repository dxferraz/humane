import { registerEnumType } from '@nestjs/graphql';

export enum NecessityScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    timeStamp = "timeStamp",
    categoryId = "categoryId",
    address = "address",
    zipCode = "zipCode",
    userId = "userId"
}


registerEnumType(NecessityScalarFieldEnum, { name: 'NecessityScalarFieldEnum', description: undefined })
