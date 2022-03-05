import { Field, Float, InputType, Int } from '@nestjs/graphql';

import { Skin } from '../prisma/skin.enum';
import { UserUpdateOneRequiredWithoutReportsInput } from '../user/user-update-one-required-without-reports.input';

@InputType()
export class MissingPersonUpdateWithoutThumbnailsInput {
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

    @Field(() => UserUpdateOneRequiredWithoutReportsInput, { nullable: true })
    reporter?: UserUpdateOneRequiredWithoutReportsInput;
}
