import { DonationWhereInput } from '@generated/donation/donation-where.input';
import { Field, InputType } from '@nestjs/graphql';

/**
 * Input type for create user mutation.
 */
@InputType()
export class DonationsPageInput {
    @Field(() => Number, { nullable: true })
    take: number;

    @Field(() => Number, { nullable: true })
    cursor: number;

    @Field(() => DonationWhereInput, { nullable: true })
    where: DonationWhereInput;
}
