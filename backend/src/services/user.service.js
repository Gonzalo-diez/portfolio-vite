import userRepository from "../repositories/user.repository.js";
import { generateAuthToken } from "../config/auth.js";
import passport from "passport";

const userService = {
    getUserById: async (userId) => {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("Usuario no encontrado");
        }

        return user;
    },

    login: async (email, password) => {
        return new Promise((resolve, reject) => {
            passport.authenticate("local", async (err, user, info) => {
                if (err) {
                    return reject(err);
                }
                if (!user) {
                    return reject(new Error(info.message || "Credenciales inválidas"));
                }

                // Generar JWT token después de la autenticación exitosa
                const access_token = generateAuthToken(user);
                resolve({ user, access_token });
            })({ body: { email, password } }, {});
        });
    }
};

export default userService;