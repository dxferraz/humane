import { Donation } from './models/donation.model';
import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { DonationService } from './donation.service';
import { DonationsPageInput } from './inputs/donations-query.input';
import { Page } from './inputs/donations-page.output';
import { User } from '../user/models/user.model';
import { UserService } from '../user/user.service';

@Resolver(() => Donation)
export class DonationResolver {
    constructor(
        private readonly donationService: DonationService,
        private readonly userService: UserService,
    ) {}

    @ResolveProperty()
    async user(@Parent() donation) {
        return this.userService.findOneById(donation.userId);
    }

    @Query(() => Page)
    async donations(@Args('data') data: DonationsPageInput) {
        return await this.donationService.getDonations(data.take, { id: data.cursor });
    }
}
