import { Donation } from './models/donation.model';
import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { DonationService } from './donation.service';
import { DonationsPageInput } from './inputs/donations-query.input';
import { Page } from './inputs/donations-page.output';
import { UserService } from '../user/user.service';
import { ImageService } from '../images/images.service';
import { CategoryService } from '../categories/category.service';

@Resolver(() => Donation)
export class DonationResolver {
    constructor(
        private readonly donationService: DonationService,
        private readonly userService: UserService,
        private readonly imageService: ImageService,
        private readonly categoryService: CategoryService,
    ) {}

    @ResolveField()
    async user(@Parent() donation) {
        return this.userService.findOneById(donation.userId);
    }

    @ResolveField()
    async thumbnails(@Parent() donation) {
        return this.imageService.getDonationImages(donation.id);
    }

    @ResolveField()
    async category(@Parent() donation) {
        return this.categoryService.getCategoryByID(donation.categoryId);
    }

    @Query(() => Page)
    async donations(@Args('data') data: DonationsPageInput) {
        return await this.donationService.getDonations(
            data.take,
            { id: data.cursor },
            data.where,
        );
    }
}
