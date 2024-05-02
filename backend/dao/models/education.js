import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    title: String,
    image: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});

const Education = mongoose.model("Education", educationSchema);

export default Education;