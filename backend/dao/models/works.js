import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
    title: String,
    sub_title: String,
    link: String,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Works = mongoose.model("Works", workSchema);

export default Works;