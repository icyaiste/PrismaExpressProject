# PrismaExpressAPI

## 🚀 How to run the server
* Install dependencies
* Generate Prisma client 
* Run database migrations (if needed)
* Seed the database
* Start the server

```
npm install
npx prisma generate
npx prisma migrate dev
npm run seed
npm run dev
```

Server will run on:  
http://localhost:3000

## 🧪 How to test routes  
You can test the API using:  
Insomnia  
Postman  
Thunder Client (VS Code) or any other tool you prefer

### 📌 Available Routes  
1. GET all users  
Endpoint: GET /userlanguages  
Description: Returns all users with their names and languages.

3. GET users by language  
Endpoint: GET /userlanguages/:language  
Example: http://localhost:3000/userlanguages/english  
Description:  Returns users who speak a specific language.

3. POST new user  
Endpoint: POST /userlanguages  
Description: Creates a new user.
Body (JSON):
```
{
  "name": "Athena",
  "email": "athena@meow.com",
  "languages": ["english", "swedish"],
  "age": 6
}
```

5. UPDATE languages  
Endpoint: PUT /users/languages  
Description: Adds a new language to a user's existing languages using their email.
Example Body:
```
{
  "email": "eve@prisma.io",
  "language": "portuguese"
}
```

5. DELETE users under 18   
Endpoint: DELETE /users/under-18  
Description: Deletes all users under 18 years old.  
Response:  
```
{
  "deletedCount": 1
}
```
