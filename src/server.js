import express from "express";
import dotenv from 'dotenv';
import connectDb from "./dbconfig/connection.js";
import mainRouter from "./routes/indexRouting.js";

dotenv.config();

const app = express();
app.use(express.json());
const port=process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
connectDb();
app.use("/api_v1",mainRouter);

