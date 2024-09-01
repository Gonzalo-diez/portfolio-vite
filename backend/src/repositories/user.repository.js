import User from "../dao/models/user.js";

const userRepository = {
    findUsers: async () => {
        return await User.find();
    },

    findById: async (userId) => {
        return await User.findById(userId);
    }
}

export default userRepository;