import mongoose from "mongoose";

const hardSkillsSchema = new mongoose.Schema({
    title: String,
    sub: String,
    percentage: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const HardSkills = mongoose.model("HardSkill", hardSkillsSchema);

export default HardSkills;