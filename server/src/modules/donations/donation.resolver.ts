import { Donation } from './models/donation.model';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { DonationService } from './donation.service';
import { DonationsPageInput } from './inputs/donations-query.input';
import { Page } from './inputs/donations-page.output';

@Resolver(() => Donation)
export class DonationResolver {
    constructor(private readonly donationService: DonationService) {}

    @Query(() => Page)
    async donations(@Args('data') data: DonationsPageInput) {
        console.log(
            await this.donationService.getDonations(data.take, { id: data.cursor }),
        );

        return await this.donationService.getDonations(data.take, { id: data.cursor });
    }
}
