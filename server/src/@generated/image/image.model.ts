import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

import { MissingPerson } from '../missing-person/missing-person.model';

@ObjectType()
export class Image {
    @Field(() => ID, { nullable: false })
    id!: number;

    @Field(() => String, { nullable: false })
    url!: string;

    @Field(() => MissingPerson, { nullable: true })
    MissingPerson?: MissingPerson | null;

    @Field(() => Int, { nullable: true })
    missingPersonId!: number | null;
}
