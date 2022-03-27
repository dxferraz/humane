import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
    findUnique = this.repository.findUnique;
    findMany = this.repository.findMany;

    constructor(private readonly repository: CategoryRepository) {}

    async getCategoryByID(id: number) {
        return await this.findUnique({
            where: {
                id,
            },
        });
    }
}
