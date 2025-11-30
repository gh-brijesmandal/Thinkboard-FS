export const getAllNotes = (req,res) => {
    res.status(200).send("All notes displayed successfully.");
}

export function createNote(req,res){
    res.status(201).json({
        message: "Note Created Successfully!"
    })
}

export function deleteNote(req,res) {
    res.status(200).json({
        message: "Note Deleted Successfully!"
    })
}
export function updateNote(req,res) {
    res.status(200).json({
        message: "Note Updated Successfully!"
    })
}