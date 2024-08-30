import User from "../dao/models/user.js";

const userRepository = {
    findById: async (userId) => {
        return await User.findById(userId);
    }
}

export default userRepository;