import { Field, InputType } from '@nestjs/graphql';

import { ImageCreateManyMissingPersonInput } from './image-create-many-missing-person.input';

@InputType()
export class ImageCreateManyMissingPersonInputEnvelope {
    @Field(() => [ImageCreateManyMissingPersonInput], { nullable: false })
    data!: Array<ImageCreateManyMissingPersonInput>;

    @Field(() => Boolean, { nullable: true })
    skipDuplicates?: boolean;
}
