import { Injectable } from '@nestjs/common';
import { ImageRepository } from './images.repository';

@Injectable()
export class ImageService {
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(private readonly repository: ImageRepository) {}

    async getDonationImages(donationId: number) {
        return await this.findMany({
            where: {
                donationId,
            },
        });
    }
}
