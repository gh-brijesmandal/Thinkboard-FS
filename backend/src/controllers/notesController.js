import Note from "./../models/Note.js"

export const getAllNotes = async (req,res) => {
    try{
        const notes = await Note.find();
        res.status(200).json(notes);
    }catch(error){
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({
            message: "Internal Servor Error"
        })
    }
}

export async function createNote(req,res){
    try{
        const { title, content } = req.body;
        const newNote = new Note({title: title, content: content})

        await newNote.save();

        res.status(201).json({message: "Note created successfully!"});
    } catch(error)
    {
        console.error("Error in createNote controller", error);
         res.status(500).json({
            message: "Internal Servor Error"
        })
    }
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