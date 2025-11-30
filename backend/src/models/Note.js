import mongoose from "mongoose";

const noteSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        }
    }
,{
    timestamps: true  // enable auto timestamps
}
)

const Note = mongoose.Model("Note", noteSchema);

export default Note;
