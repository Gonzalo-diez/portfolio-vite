import passport from "passport";
import userRepository from "../repositories/user.repository.js";
import auth from "../../config/passport-config.js";

const userService = {
    getUserById: async (userId) => {
        const user = await userRepository.findById(userId);

        if (!user) {
            throw new Error("Usted no es el autor");
        }

        return user;
    },

    authenticateUser: async (username, password, req, res, next) => {
        return new Promise((resolve, reject) => {
            passport.authenticate("local", (err, user, info) => {
                if (err) {
                    return reject(err);
                }
                if (!user) {
                    return reject(new Error("Credenciales inválidas"));
                }

                const token = auth.generateAuthToken(user);
                resolve({ user, token });
            })(req, res, next);
        });
    },
    
    logoutUser: (req) => {
        return new Promise((resolve, reject) => {
            if (!req.isAuthenticated()) {
                return reject(new Error("No hay una sesión activa para cerrar"));
            }

            req.logout((err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}

export default userService;