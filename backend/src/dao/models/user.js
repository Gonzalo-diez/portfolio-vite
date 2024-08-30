import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    githubId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

export default User;