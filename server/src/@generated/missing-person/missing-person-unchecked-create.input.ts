import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ImageUncheckedCreateNestedManyWithoutMissingPersonInput } from '../image/image-unchecked-create-nested-many-without-missing-person.input';
import { Skin } from '../prisma/skin.enum';

@InputType()
export class MissingPersonUncheckedCreateInput {
    @Field(() => Int, { nullable: true })
    id?: number;

    @Field(() => String, { nullable: false })
    name!: string;

    @Field(() => Int, { nullable: false })
    age!: number;

    @Field(() => Float, { nullable: false })
    height!: number;

    @Field(() => Skin, { nullable: false })
    skin!: keyof typeof Skin;

    @Field(() => String, { nullable: false })
    description!: string;

    @Field(() => Int, { nullable: false })
    reporterId!: number;

    @Field(() => ImageUncheckedCreateNestedManyWithoutMissingPersonInput, {
        nullable: true,
    })
    thumbnails?: ImageUncheckedCreateNestedManyWithoutMissingPersonInput;
}
