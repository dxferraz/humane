import { Test, TestingModule } from '@nestjs/testing';
import { DummyRepository } from 'src/core/prisma/testing';
import { createSpyObj } from 'jest-createspyobj';

import { UserRepository } from './user.repository';
import { UserService } from './user.service';

describe('UserService', () => {
    let service: UserService;
    let repository: jest.Mocked<UserRepository>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                UserService,
                {
                    provide: UserRepository,
                    useValue: createSpyObj(
                        class UserRepository extends DummyRepository {},
                    ),
                },
            ],
        }).compile();

        service = module.get(UserService);
        repository = module.get(UserRepository);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(repository).toBeDefined();
    });

    it('find one user', async () => {
        await service.findUnique({ where: { email: 'u' } });
        expect(repository.findUnique).toHaveBeenCalledWith({
            where: { userId: 'u' },
        });
    });
});
