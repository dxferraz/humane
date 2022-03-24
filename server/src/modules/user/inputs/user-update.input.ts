import { Field, InputType } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';

/**
 * Update user input type.
 */
@InputType()
export class UserUpdateInput {
    @Field(() => String, { nullable: true })
    name: string;

    @Field(() => String, { nullable: true })
    password: string;

    @Field(() => String, { nullable: true })
    birthdate: string;

    @Field(() => String, { nullable: true })
    phone: string;

    @Field(() => GraphQLUpload, { nullable: true })
    thumbnail: GraphQLUpload;
}
