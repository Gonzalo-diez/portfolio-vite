import passport from "passport";
import mongoose from "mongoose";
import User from "../models/user.js";
import auth from "../../config/passport-config.js";

const userController = {
    getUserId: async(req, res) => {
        const userId = req.params.id;

        try {
            const userIdObject = new mongoose.Types.ObjectId(userId);

            const user = await User.findById(userIdObject).select("name surname email avatar").exec();

            if (!user) {
                return res.status(404).json({ error: "Usuario no encontrado" });
            }
            return res.json(user);
        } catch (err) {
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    login: async(req, res, next) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "No eres el autor" });
        }

        passport.authenticate("local", (err, user, info) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.status(401).json({ error: "Credenciales inválidas" });
            }

            const token = auth.generateAuthToken(user);

            return res.json({
                message: "Inicio de sesión exitoso",
                user,
                token: token,
            });
        })(req, res, next);
    },
    
    logout: (req, res) => {
        try {
            if (!req.isAuthenticated()) {
                return res.status(401).json({ error: "No hay una sesión activa para cerrar" });
            }
            req.logout((err) => {
                if (err) {
                    console.error('Error al cerrar sesión:', err);
                    return res.status(500).json({ error: 'Error al cerrar sesión' });
                }

                res.json({ message: 'Sesión cerrada exitosamente' });
            });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
            res.status(500).json({ error: "Error al cerrar sesión", details: error.message });
        }
    },
}

export default userController;