import express from "express";
import dotenv from 'dotenv';
import mainRouter from "./routes/indexRouting.js";
import connectDb from "./config/connection.js";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port=process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
connectDb();
app.use("/api_v1",mainRouter);

