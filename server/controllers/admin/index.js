import express from "express";
import adminModel from "../../models/admin/admin.js";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  try {
    let adminData = req.body;
    console.log(adminData);
    await adminModel.create(adminData);
    res.status(200).json({ msg: "Admin Added Successfully!!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get All 
router.get("/getall", async (req, res) => {
  try {
    let adminData = await adminModel.find({});
    res.status(200).json(adminData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by ID
router.get("/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let adminData = await adminModel.findById(id);
    res.status(200).json(adminData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get by email
router.get("/get/:email", async (req, res) => {
  try {
    let adminEmail = req.params.email;
    let adminData = await adminModel.findOne({ email: adminEmail })
    res.status(200).json(adminData);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update by ID
router.put("/update/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let adminData = req.body;
    await adminModel.findByIdAndUpdate(
      {
        _id: id
      },
      {
        $set: { age: 20 }
      },
      {
        new: true,
      });
    res.status(200).json({ msg: "Updated sucessfully!!" });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Update by email
router.put("/update/:email", async (req, res) => {
  try {
    let adminEmail = req.params.email;
    let adminData = req.body;

    await adminModel.findOneAndUpdate(
      {email: "husnabanu@gmail.com"},
      {$set: {"age": 33 }},
      { new: true,
      }
    );
    res.status(200).json({ msg: "Updated Successfully!!"});
  } catch (error) {
    res.status(500).json(error);
  }
});

//Delete All 
router.delete("/delete", async (req, res) => {
  try {
    await adminModel.deleteMany();
    res.status(200).json({ msg: "All Books Deleted Sucessfully..." });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Delete by id
router.delete("/delete/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let adminData = await adminModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book Deleted Sucessfully..." });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});
export default router;
