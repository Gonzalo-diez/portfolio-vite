import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    pdf_resume: String,
    pdf_sub_resume: String,
    resume: String,
    sub_resume: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Resume = mongoose.model("Resume", resumeSchema);

export default Resume;