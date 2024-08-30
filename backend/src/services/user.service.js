import userRepository from "../repositories/user.repository.js";
import { generateAuthToken } from "../config/auth.js";

const userService = {
    getUserById: async (userId) => {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("Usted no es el autor");
        }

        return user;
    },

    handleGitHubCallback: async (req) => {
        const user = req.user;

        console.log("Usuario:", user);

        try {
            console.log(`Manejo de devolución de GitHub callback para user: ${user.email}`);
            const access_token = generateAuthToken(user);
            console.log(`Generated access_token: ${access_token}`);
            console.log(`Devolución de GitHub callback manejada exitosamente para el user: ${user.email}`);
            return { user, access_token };
        } catch (error) {
            console.log(`Error en GitHub callback del user: ${user.email} - ${error.message}`);
            throw new Error("Error interno del servidor");
        }
    }
}

export default userService;