import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import jwt from "jsonwebtoken";
import User from "../dao/models/user.js"
import bcrypt from "bcrypt";
import { JWT_SECRET } from "../util.js";

const initializePassport = () => {
    // Configurar estrategia de autenticación local
    passport.use(new LocalStrategy({ usernameField: 'username' }, async (username, password, done) => {
        try {
            const user = await User.findOne({ username });

            if (!user) {
                return done(null, false, { message: 'Credenciales incorrectas' });
            }

            const validPassword = await bcrypt.compare(password, user.password);

            if (!validPassword) {
                return done(null, false, { message: 'Credenciales incorrectas' });
            }

            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }));

    // Serializar y deserializar usuario para guardar en sesión
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};

const generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
};

const auth = {
    initializePassport,
    generateAuthToken
};

export default auth;