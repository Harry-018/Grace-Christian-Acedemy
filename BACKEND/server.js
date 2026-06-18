import express from "express";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/students", studentRoutes);
app.use("/teachers", teacherRoutes);
app.use("/applications", applicationRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
