import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const data = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    languages: ['english'],
    age: 28,
  },
  {
    name: 'Bob',
    email: 'bob@prisma.io',
    languages: ['swedish'],
    age: 34,
  },
  {
    name: 'Charlie',
    email: 'charlie@prisma.io',
    languages: ['english'],
    age: 25,
  },
  {
    name: 'David',
    email: 'david@prisma.io',
    languages: ['german'],
    age: 42,
  },
  {
    name: 'Eve',
    email: 'eve@prisma.io',
    languages: ['french'],
    age: 30,
  },
  {
    name: 'Frank',
    email: 'frank@prisma.io',
    languages: ['spanish'],
    age: 37,
  },
  {
    name: 'Grace',
    email: 'gracie@prisma.io',
    languages: ['italian'],
    age: 29,
  },
  {
    name: 'Heidi',
    email: 'heidi@prisma.io',
    languages: ['norwegian'],
    age: 33,
  },
  {
    name: 'Ivan',
    email: 'ivan@prisma.io',
    languages: ['russian'],
    age: 40,
  },
  {
    name: 'Judy',
    email: 'judy@prisma.io',
    languages: ['danish'],
    age: 27,
  },
];

async function seed() {
  console.log('Starting seed...');

  for (const user of data) {
    await prisma.user.create({
      data: user,
    });
  }

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