import express from "express";
import dotenv from "dotenv";
import notesRouter from "./routes/notesRouter.js";  // import the router to handle /api/notes routes
import { connectDB } from "./config/db.js";

dotenv.config({ path: "./src/.env" }); // load env variable under src folder 

connectDB(process.env.MONGO_URI); // connects to db 

const app = express();

app.use(express.json());
app.use("/api/notes", notesRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started on http://localhost:8000");
})