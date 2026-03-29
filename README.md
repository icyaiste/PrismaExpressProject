# PrismaExpressAPI

## 🚀 How to run the server
* Install dependencies:
npm install
* Generate Prisma client:
npx prisma generate
* Run database migrations (if needed):
npx prisma migrate dev
* Seed the database:
npm run seed
* Start the server:
npm run dev

Server will run on:
http://localhost:3000

##🧪 How to test routes
You can test the API using:
Insomnia
Postman
Thunder Client (VS Code)

📌 Available Routes
1. GET all users
Endpoint: GET /userlanguages
Description: Returns all users with their names and languages.

3. GET users by language
Endpoint:
GET /userlanguages/:language
Example:
curl http://localhost:3000/userlanguages/english
Description:
Returns users who speak a specific language.

3. POST new user
Endpoint:
POST /userlanguages
Body (JSON):
{
  "name": "Athena",
  "email": "athena@meow.com",
  "languages": ["english", "swedish"],
  "age": 6
}
Description:
Creates a new user.

5. UPDATE languages
Endpoint:
PUT /users/languages
Example Body:
{
  "email": "eve@prisma.io",
  "language": "portuguese"
}
Description:
Adds a new language to a user's existing languages using their email.

5. DELETE users under 18
Endpoint:
DELETE /users/under-18
Description:
Deletes all users under 18 years old.
Response:
{
  "deletedCount": 1
}
