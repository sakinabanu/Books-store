import express from "express";
import config from "config";
import "./utils/db_connect.js";

// controllers
import userRouter from "./controllers/users/index.js"
import adminRouter from "./controllers/admin/index.js"
import studentRouter from "./controllers/students/index.js"
import teacherRouter from "./controllers/teachers/index.js";
const app = express();
const PORT = config.get("PORT") || 5000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`SERVER IS RUNNING AT ${PORT}`);
});

// modeles
app.use("/users", userRouter)
app.use("/admins", adminRouter)
app.use("/students", studentRouter)
app.use("/teachers", teacherRouter)

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING AT ${PORT}`);
}); 