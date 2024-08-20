

import { PrismaClient } from "@prisma/client"; //importas el cliente de prisma
const prisma =  new PrismaClient();  //declaras prisma;


async function main() {
    const article1 = await prisma.article.upsert({
        where: { title: 'article1 title'},
        update: {},
        create: {
            title: 'article1 title',
            body: 'lorem ipsum dolor',
            description: 'first article description',
            published: false,
        },
    });
    const article2 = await prisma.article.upsert({
        where: { title: 'article2 title'},
        update:  {},
        create: {
            title: 'article2 title',
            body: 'Erase una vez...',
            description: 'second article description',
            published: true,
        },
    });

    console.log ({ article1, article2 });
}

    main().catch ((e) => {
        console.error(e);
        process.exit(1);
    }).finally(async () => { //finally  asegura que, con o sin error, se haga el disconnect
        await prisma.$disconnect();
    });