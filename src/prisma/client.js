const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function connect() {
  try {
    await prisma.$connect();
    console.log("Connected to the database successfully!");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
}

connect();

module.exports = prisma;