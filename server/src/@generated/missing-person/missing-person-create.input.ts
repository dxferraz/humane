import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { ImageCreateNestedManyWithoutMissingPersonInput } from '../image/image-create-nested-many-without-missing-person.input';
import { Skin } from '../prisma/skin.enum';
import { UserCreateNestedOneWithoutReportsInput } from '../user/user-create-nested-one-without-reports.input';

@InputType()
export class MissingPersonCreateInput {
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

    @Field(() => ImageCreateNestedManyWithoutMissingPersonInput, { nullable: true })
    thumbnails?: ImageCreateNestedManyWithoutMissingPersonInput;

    @Field(() => UserCreateNestedOneWithoutReportsInput, { nullable: false })
    reporter!: UserCreateNestedOneWithoutReportsInput;
}
