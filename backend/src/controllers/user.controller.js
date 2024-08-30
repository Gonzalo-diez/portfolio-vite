import userService from "../services/user.service.js";
import passport from "passport";

const userController = {
    getUserId: async (req, res) => {
        const userId = req.params.id;
        const isAuthenticated = req.session;
        const jwtToken = req.session.token;

        try {
            const user = await userService.getUserById(userId);
            return res.json({ user, isAuthenticated, jwtToken });
        } catch (err) {
            if (err.message === "Usuario no encontrado") {
                return res.status(404).json({ error: err.message });
            }
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getGitHub: (req, res, next) => {
        passport.authenticate("github", { scope: ["user:email"] })(req, res, next);
    },

    gitHubCallback: (req, res, next) => {
        passport.authenticate("github", { failureRedirect: "/" })(req, res, next);
    },

    handleGitHubCallback: async (req, res) => {
        try {
            const { user, access_token } = await userService.handleGitHubCallback(req);

            req.session.token = access_token;
            req.session.userId = user._id;
            req.session.user = user;
            req.session.isAuthenticated = true;

            res.json({
                message: "Autenticación exitosa",
                jwtToken: access_token,
                userId: user._id.toString(),
            });
        } catch (error) {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    },

    logout: async (req, res) => {
        try {
            // Elimina la sesión del usuario
            req.session.destroy((err) => {
                if (err) {
                    return res.status(500).json({ error: "Error al cerrar la sesión", details: err.message });
                }
                res.json({ message: 'Sesión cerrada exitosamente' });
            });
        } catch (err) {
            if (err.message === "No hay una sesión activa para cerrar") {
                return res.status(401).json({ error: err.message });
            }
            res.status(500).json({ error: "Error al cerrar sesión", details: err.message });
        }
    }
};

export default userController;