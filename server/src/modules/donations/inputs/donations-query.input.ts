import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber } from 'class-validator';

/**
 * Input type for create user mutation.
 */
@InputType()
export class DonationsPageInput {
    @Field(() => Number, { nullable: true })
    take: number;

    @Field(() => Number, { nullable: true })
    cursor: number;
}
