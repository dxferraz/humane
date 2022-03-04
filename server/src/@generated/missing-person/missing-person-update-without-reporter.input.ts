import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ImageUpdateManyWithoutMissingPersonInput } from '../image/image-update-many-without-missing-person.input';
import { Skin } from '../prisma/skin.enum';

@InputType()
export class MissingPersonUpdateWithoutReporterInput {
    @Field(() => String, { nullable: true })
    name?: string;

    @Field(() => Int, { nullable: true })
    age?: number;

    @Field(() => Float, { nullable: true })
    height?: number;

    @Field(() => Skin, { nullable: true })
    skin?: keyof typeof Skin;

    @Field(() => String, { nullable: true })
    description?: string;

    @Field(() => ImageUpdateManyWithoutMissingPersonInput, { nullable: true })
    thumbnails?: ImageUpdateManyWithoutMissingPersonInput;
}
