import User from "../models/user.js";

const userRepository = {
    findById: async (userId) => {
        return await User.findById(userId).exec();
    }
}

export default userRepository;