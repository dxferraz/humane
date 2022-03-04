import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ImageUncheckedUpdateManyWithoutMissingPersonInput } from '../image/image-unchecked-update-many-without-missing-person.input';
import { Skin } from '../prisma/skin.enum';

@InputType()
export class MissingPersonUncheckedUpdateWithoutReporterInput {
    @Field(() => Int, { nullable: true })
    id?: number;

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

    @Field(() => ImageUncheckedUpdateManyWithoutMissingPersonInput, { nullable: true })
    thumbnails?: ImageUncheckedUpdateManyWithoutMissingPersonInput;
}
