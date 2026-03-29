import express from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const app = express();
app.use(express.json());
console.log(process.env.DATABASE_URL);

app.get('/userlanguages', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        name: true,
        languages: true
      }
    });
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
    res.status(500).send({ error: 'An unknown error occurred' });
  }
});

app.get('/userlanguages/:language', async (req, res) => {
  try {
    const language = req.params.language.toLowerCase();
    const users = await prisma.user.findMany({
      where: {
        languages: {
          has: language
        }
      },
      select: {
        name: true,
        languages: true
      }
    });
    res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
    res.status(500).send({ error: 'An unknown error occurred' });
  }
});

app.post('/userlanguages', async (req, res) => {
  try {
    const { name, email, languages, age } = req.body;
    const newUser = await prisma.user.create({
      data: {
        name, // name: 'Athena',
        email, //Add user with this email : thenupatenu@meow.com
        languages, // languages: ['swedish', 'lithuanian']
        age      } // age: 6
    });  // yes it's my cat's info :D
    res.json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
    res.status(500).send({ error: 'An unknown error occurred' });
  }
});

app.put('/userlanguages', async (req, res) => {
  try {
    const updatedUser = await prisma.user.update({
      where: {email: 'thenupatenu@meow.com'}, // OR where : {email: 'thenupatenu@meow.com}
      data: {email: 'goddessofwar@meow.com'} // data: { languages: { push: 'english' } }
    });
    res.json(updatedUser);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    }
    res.status(500).send({ error: 'An unknown error occurred' });
  }
});

app.delete('/userlanguages', async (req, res) => {
  try {
    const result = await prisma.user.deleteMany({
      where: {
        age: { lt: 18 }
      }
    });
    res.json({
      deletedCount: result.count
    });
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send({ error: error.message });
    } else {
      res.status(500).send({ error: 'An unknown error occurred' });
    }
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});