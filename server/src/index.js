import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://alexander:q123Q123xyz123@recipes.molcnuh.mongodb.net/recipes?retryWrites=true&w=majority")

app.listen(3001, () => console.log("SERVER STARTED!"))