
import express from "express";
import teacherModel from "../../models/teachers/teachers.js";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  try {
    let teacherData = req.body;
    console.log(teacherData);
    await teacherModel.create(teacherData);
    res.status(200).json({ msg: "Added Successfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Get All 
router.get("/getall", async (req, res) => {
  try {
    let teacherData = await teacherModel.find({});
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by ID
router.get("/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let teacherData = await teacherModel.findById(id);
    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by email
router.get("/:email", async (req, res) => {
  try {
    let teacherEmail = req.params.email;
    let teacherData = await teacherModel.findOneAndUpdate(
      {
        email : teacherEmail,
      },
      {
        $set: teacherData,
      },
      {
        new: true,
      }
    );

    res.status(200).json(teacherData);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Update by ID
router.put("/update/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let teacherData = req.body;
    await teacherModel.findByIdAndUpdate(id, teacherData);
    res.status(200).json({ msg: "Updated sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Update by email
router.put("/update/:email", async (req, res) => {
  try {
    let teacherEmail = req.params.email;
    let teacherData = req.body;

    await teacherModel.findOneAndUpdate(
      {
        email: teacherEmail,
      },
      {
        $set: teacherData,
      },
      {
        new: true,
      }
    );
    res.status(200).json({ msg: "Updated Successfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Delete All 
router.delete("/delete", async (req, res) => {
  try {
    await teacherModel.deleteMany();
    res.status(200).json({ msg: "All Books Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Delete by id
router.delete("/delete/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    await teacherModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});
export default router;
