
import express from "express";
import userModel from "../../models/users/user.js";

const router = express.Router();

//Register
router.post("/register", async (req, res) => {
  try {
    let userData = req.body;
    console.log(userData);
    await userModel.create(userData);
    res.status(200).json({ msg: "Admin Added Successfully!!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Get All 
router.get("/getall", async (req, res) => {
  try {
    let userData = await userModel.find({});
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by ID
router.get("/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let userData = await userModel.findById(id);
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Get by email
router.get("/:email", async (req, res) => {
  try {
    let userEmail = req.params.email;
    let userData = await userModel.findOneAndUpdate(
      {
        email : userEmail,
      },
      {
        $set: userData,
      },
      {
        new: true,
      }
    );

    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

//Update by ID
router.put("/update/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
    let userData = req.body;
    await userModel.findByIdAndUpdate(id, userData);
    res.status(200).json({ msg: "Updated sucessfully..." });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Update by email
router.put("/update/:email", async (req, res) => {
  try {
    let userEmail = req.params.email;
    let userData = req.body;

    await userModel.findOneAndUpdate(
      {
        email: userEmail,
      },
      {
        $set: userData,
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
    await userModel.deleteMany();
    res.status(200).json({ msg: "All Books Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});

//Delete by id
router.delete("/delete/:ID", async (req, res) => {
  try {
    let id = req.params.ID;
   await userModel.findByIdAndDelete(id);
    res.status(200).json({ msg: "Book Deleted Sucessfully!!" });
  } catch (error) {
    res.status(500).json({ msg: "Internel server error" });
  }
});
export default router;
