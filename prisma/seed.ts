import { PrismaClient } from '../generated/prisma/client';
const prisma = new PrismaClient();

async function seed() {
    console.log('Starting seed...');
    await prisma.user.createMany({
        data: [
            { name: 'Alice', email: 'alice@prisma.io' },
            { name: 'Bob', email: 'bob@prisma.io' },
            { name: 'Charlie', email: 'charlie@prisma.io' },
            { name: 'David', email: 'david@prisma.io' },
            { name: 'Eve', email: 'eve@prisma.io' },
            { name: 'Frank', email: 'frank@prisma.io' },
            { name: 'Grace', email: 'gracie@prisma.io' },
            { name: 'Heidi', email: 'heidi@prisma.io' }
        ]
    });
    console.log('Seeding completed!');
}

seed()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });