Day 1 – Getting Started with Prisma ORM

Task:
Set up a basic backend with Prisma ORM to interact with a mySql database. I created a simple User model and implemented basic CRUD operations using Prisma Client.

What I Did:

Installed Prisma and set up .env for mySql connection.

Ran npx prisma init to generate the Prisma schema.

Created a User model with fields: id, name, email.

Used prisma migrate to sync schema to the database.

Created createUser, getAllUsers,getUser,updateUser and deleteUser functions using Prisma Client.

Challenges Faced:
I am more comfortable with Sequelize, so Prisma's syntax and flow felt new.

Prisma uses a schema file (schema.prisma) instead of model files like Sequelize.

Query syntax is simpler but different (example-prisma.user.findMany() vs User.findAll()).

Needed to understand the migration workflow, which is a bit different from Sequelize CLI.


Learnings:

Prisma is type-safe, clean, and integrates well with TypeScript.

Clear documentation helped me understand differences from Sequelize.

Excited to explore more Prisma features in upcoming tasks.

