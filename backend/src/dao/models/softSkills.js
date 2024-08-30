import mongoose from "mongoose";

const softSkillsSchema = new mongoose.Schema({
    title: String,
    sub_title: String,
    percentage: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const SoftSkills = mongoose.model("SoftSkills", softSkillsSchema);

export default SoftSkills;