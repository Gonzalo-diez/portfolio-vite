import userService from "../dao/services/user.service.js";

const userController = {
    getUserId: async (req, res) => {
        const userId = req.params.id;
        
        try {
            const user = await userService.getUserById(userId);
            return res.json(user);
        } catch (err) {
            if (err.message === "Usuario no encontrado") {
                return res.status(404).json({ error: err.message });
            }
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    login: async (req, res, next) => {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "No eres el autor" });
        }

        try {
            const { user, token } = await userService.authenticateUser(username, password, req, res, next);
            return res.json({
                message: "Inicio de sesión exitoso",
                user,
                token: token,
            });
        } catch (err) {
            if (err.message === "Credenciales inválidas") {
                return res.status(401).json({ error: err.message });
            }
            return res.status(500).json({ error: "Error en la autenticación", details: err.message });
        }
    },

    logout: async (req, res) => {
        try {
            await userService.logoutUser(req);
            res.json({ message: 'Sesión cerrada exitosamente' });
        } catch (err) {
            if (err.message === "No hay una sesión activa para cerrar") {
                return res.status(401).json({ error: err.message });
            }
            console.error('Error al cerrar sesión:', err);
            res.status(500).json({ error: "Error al cerrar sesión", details: err.message });
        }
    }
};

export default userController;