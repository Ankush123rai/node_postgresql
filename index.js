// const express = require("express");
// const { PrismaClient } = require("@prisma/client");
// const bodyParser = require("body-parser");

// const app = express();
// const prisma = new PrismaClient();

// app.use(bodyParser.json());

// app.post("/students", async (req, res) => {
//   const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;

//   try {
//     const student = await prisma.student.create({
//       data: { studentName, cohort, courses, joinDate, lastLogin, status },
//     });
//     res.status(201).json(student);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to create student" });
//   }
// });

// app.get("/students", async (req, res) => {
//   try {
//     const students = await prisma.student.findMany();
//     res.status(200).json(students);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to fetch students" });
//   }
// });

// app.put("/students/:id", async (req, res) => {
//   const { id } = req.params;
//   const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;

//   try {
//     const student = await prisma.student.update({
//       where: { id },
//       data: { studentName, cohort, courses, joinDate, lastLogin, status },
//     });
//     res.status(200).json(student);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to update student" });
//   }
// });

// app.delete("/students/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     await prisma.student.delete({ where: { id } });
//     res.status(204).send();
//   } catch (error) {
//     res.status(500).json({ error: "Failed to delete student" });
//   }
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
