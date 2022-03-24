import 'dotenv-flow/config';
import { EyeColor, HairColor, PrismaClient, Skin } from '@prisma/client';

const prisma = new PrismaClient();

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
            url: 'https://www.pngfind.com/pngs/m/5-52097_avatar-png-pic-vector-avatar-icon-png-transparent.png',
        },
    });

    // Users
    const user1 = await prisma.user.create({
        data: {
            name: 'root',
            email: 'root@conduit.com',
            birthdate: new Date(1989, 8, 11),
            phone: '123456',
            password: 'rooT123!@',
            thumbnail:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
        },
    });

    const category = await prisma.category.create({
        data: {
            title: 'Clothes',
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: 'John Doe',
            email: ' e',
            birthdate: new Date(2002, 9, 11),
            phone: '123456',
            password: 'rooT123!@',
            donations: {
                create: [
                    {
                        title: 'Clothes for my son!',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!1',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!2',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!3',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!4',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!5',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!6',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!7',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                    {
                        title: 'Clothes for my son!8',
                        description:
                            'My son is 12 years old and lorem ipsum dolor sit amet, consequat purus, eu aliquam sapien tellus commodo tortor. Donec vel nibh sit amet risus.',
                        address: '27 Stoneybrook Crt',
                        zipCode: 'B3M3K5',
                        category: {
                            connect: {
                                id: category.id,
                            },
                        },
                    },
                ],
            },
            thumbnail:
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
            reports: {
                create: [
                    {
                        thumbnails: {
                            create: [
                                {
                                    url: 'https://iconape.com/wp-content/png_logo_vector/avatar-11.png',
                                },
                            ],
                        },

                        name: 'Maria Doe',
                        age: 12,
                        height: 43,
                        skin: Skin.BLACK,
                        eyeColor: EyeColor.BLUE,
                        hairColor: HairColor.BALCK,
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sapien nec condimentum commodo. Curabitur varius nisi vel metus faucibus, in viverra erat condimentum. Cras non nisi molestie, elementum libero lobortis, ultricies nisi. Mauris nulla turpis, rhoncus sollicitudin scelerisque nec, varius nec erat. Maecenas a nulla libero. Aliquam id libero tellus. Etiam accumsan justo ac ligula hendrerit, eget lobortis lorem commodo. Nullam mollis ullamcorper dui sed efficitur. Mauris sem sapien, consectetur sit amet velit a, varius condimentum sapien.',
                    },
                    {
                        thumbnails: {
                            create: [
                                {
                                    url: 'https://cdn3.vectorstock.com/i/1000x1000/23/22/new-woman-avatar-icon-flat-vector-19152322.jpg',
                                },
                                {
                                    url: 'https://www.pngitem.com/pimgs/m/661-6618266_avatar-icon-clipart-png-download-avatar-movie-face.png',
                                },
                            ],
                        },
                        name: 'Thereza Dolores',
                        age: 43,
                        height: 89,
                        skin: Skin.WHITE,
                        eyeColor: EyeColor.BLUE,
                        hairColor: HairColor.BALCK,
                        description:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt sapien nec condimentum commodo. Curabitur varius nisi vel metus faucibus, in viverra erat condimentum. Cras non nisi molestie, elementum libero lobortis, ultricies nisi. Mauris nulla turpis, rhoncus sollicitudin scelerisque nec, varius nec erat. Maecenas a nulla libero. Aliquam id libero tellus. Etiam accumsan justo ac ligula hendrerit, eget lobortis lorem commodo. Nullam mollis ullamcorper dui sed efficitur. Mauris sem sapien, consectetur sit amet velit a, varius condimentum sapien.',
                    },
                ],
            },
        },
    });

    // ChatRom
    const chatRoom = await prisma.chatRoom.create({
        data: {
            messages: {
                create: [
                    {
                        message: 'I love you. xoxo',
                        author: { connect: { id: user1.id } },
                    },
                    {
                        message: 'I love you you too',
                        author: { connect: { id: user2.id } },
                    },
                ],
            },
        },
    });

    await prisma.usersOnChatRoom.create({
        data: {
            user: { connect: { id: user1.id } },
            chatRoom: { connect: { id: chatRoom.id } },
        },
    });
    await prisma.usersOnChatRoom.create({
        data: {
            user: { connect: { id: user2.id } },
            chatRoom: { connect: { id: chatRoom.id } },
        },
    });
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
