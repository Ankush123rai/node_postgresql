const prisma = require("../prisma/client");

exports.createStudent = async (req, res) => {
  const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;
  try {
    const student = await prisma.student.create({
      data: { studentName, cohort, courses, joinDate, lastLogin, status },
    });
    res.status(201).json(student);
  } catch (error) {
    console.error("Error creating student:", error); 
    res.status(500).json({ error: "Failed to create student", details: error.message });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch students" });
  }
};

exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { studentName, cohort, courses, joinDate, lastLogin, status } = req.body;

  try {
    const student = await prisma.student.update({
      where: { id },
      data: { studentName, cohort, courses, joinDate, lastLogin, status },
    });
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: "Failed to update student" });
  }
};

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  console.log("id", id);
  
  try {
    await prisma.student.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete student" });
  }
};
