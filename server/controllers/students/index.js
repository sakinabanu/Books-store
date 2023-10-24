import express from "express";
import studentModel from "../../models/students/student.js";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  try {
    let studentData = req.body;
    console.log(studentData);
    await studentModel.create(studentData);
    res.status(200).json({ msg: "Student Added Successfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Get All 
router.get("/getall", async (req, res) => {
  try {
    let studentData = await studentModel.find({});
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by ID
router.get("/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let studentData = await studentModel.findById(id);
    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by email
router.get("/:email", async (req, res) => {
  try {
    let studentEmail = req.params.email;
    let studentData = await studentModel.findOneAndUpdate(
      {
        email : studentEmail,
      },
      {
        $set: studentData,
      },
      {
        new: true,
      }
    );

    res.status(200).json(studentData);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Update by ID
router.put("/update/:adminId", async (req, res) => {
  try {
    let id = req.params.studentEmail;
    let studentData = req.body;
    await studentModel.findByIdAndUpdate(id, studentData);
    res.status(200).json({ msg: "Updated sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Update by email
router.put("/update/:email", async (req, res) => {
  try {
    let adminEmail = req.params.email;
    let studentData = req.body;

    await studentModel.findOneAndUpdate(
      {
        email: adminEmail,
      },
      {
        $set: studentData,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ msg: "Student Updated Successfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Delete All 
router.delete("/delete", async (req, res) => {
  try {
    await studentModel.deleteMany();
    res.status(200).json({ msg: "All Books Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Delete by id
router.delete("/delete/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    await studentModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});
export default router;
