import 'dotenv-flow/config';
import { EyeColor, HairColor, PrismaClient, Skin } from '@prisma/client';
import faker from '@faker-js/faker';

const prisma = new PrismaClient();

function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}

async function main() {
    console.log('Seeding...');
    await prisma.$connect();

    await prisma.image.deleteMany({});
    await prisma.missingPerson.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.usersOnChatRoom.deleteMany({});
    await prisma.chatRoom.deleteMany({});
    await prisma.message.deleteMany({});
    await prisma.category.deleteMany({});

    // Missing Person Images
    await prisma.image.create({
        data: {
            url: faker.image.avatar(),
        },
    });

    const category1 = await prisma.category.create({
        data: {
            title: 'Clothes',
        },
    });

    const category2 = await prisma.category.create({
        data: {
            title: 'Furniture',
        },
    });

    const category3 = await prisma.category.create({
        data: {
            title: 'Home',
        },
    });

    const categories = [category1, category2, category3];
    const users: any = [];

    for (let i = 0; i < 100; i++) {
        // Donations
        const donations: any = [];
        const reports: any = [];

        for (let j = 0; j < 30; j++) {
            donations.push({
                title: faker.hacker.phrase(),
                description: faker.lorem.paragraph(),
                address: faker.address.city(),
                zipCode: faker.address.zipCode(),
                category: {
                    connect: {
                        id: categories[Math.floor(Math.random() * categories.length)]
                            .id,
                    },
                },
            });

            reports.push({
                thumbnails: {
                    create: [
                        {
                            url: faker.image.avatar(),
                        },
                    ],
                },

                name: faker.name.findName(),
                age: getRandomArbitrary(5, 40),
                height: getRandomArbitrary(30, 150),
                skin: Skin.BLACK,
                eyeColor: EyeColor.BLUE,
                hairColor: HairColor.BALCK,
                description: faker.lorem.paragraph(),
            });
        }

        // Users
        const user = await prisma.user.create({
            data: {
                name: faker.name.findName(),
                email: faker.internet.email(),
                birthdate: faker.date.past(),
                phone: faker.phone.phoneNumber(),
                password: 'samepassword',
                thumbnail: faker.image.avatar(),
                donations: {
                    create: donations,
                },
                reports: {
                    create: reports,
                },
            },
        });

        users.push(user);

        if (i > 2) {
            const author1 = users[Math.floor(Math.random() * users.length)].id;

            const author2 = users[Math.floor(Math.random() * users.length)].id;

            if (author1 !== author2) {
                const authors = [author1, author2];
                // ChatRom
                const chatRoom = await prisma.chatRoom.create({
                    data: {
                        messages: {
                            create: (() => {
                                const messages: any = [];
                                for (let k = 0; k < 40; k++) {
                                    messages.push({
                                        message: faker.hacker.phrase(),
                                        author: {
                                            connect: {
                                                id: authors[
                                                    Math.floor(
                                                        Math.random() * authors.length,
                                                    )
                                                ],
                                            },
                                        },
                                    });
                                }
                                return messages;
                            })(),
                        },
                    },
                });

                await prisma.usersOnChatRoom.create({
                    data: {
                        userId: author1,
                        chatRoomId: chatRoom.id,
                    },
                });

                await prisma.usersOnChatRoom.create({
                    data: {
                        userId: author2,
                        chatRoomId: chatRoom.id,
                    },
                });
            }
        }
    }
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
