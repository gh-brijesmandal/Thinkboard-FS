import express from "express";

const app = express();

app.get("/api/notes", (req,res) => {
    res.status(200).send("You got 20 notes");
}).post("/api/notes", (req,res) => {
    res.status(201).json({
        message: "Note created successfully!"
    })
})

app.put("/api/notes/:id", (req,res) => {
    res.status(200).json({
        message: "Note updated successfully!"
    })
}).delete((req,res) => {
    res.status(200).json({ message: "Note deleted successfully!" })
})




app.listen(8000, () => {
    console.log("Server started on http://localhost:8000");
})