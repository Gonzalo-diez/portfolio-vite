import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../dao/models/user.js";
import { JWT_SECRET } from "../util.js";

const initializePassport = () => {
    passport.use(new LocalStrategy({ usernameField: 'email', passwordField: 'password' }, async (email, password, done) => {
        try {
            const user = await User.findOne({ email: "gonzalodiez97@gmail.com" }).exec();

            console.log("Usuario:", user);
    
            // Verificar si el usuario existe
            if (!user) {
                return done(null, false, { message: 'Usuario no encontrado' });
            }
    
            // Verificar si la contraseña es correcta
            const validPassword = await bcrypt.compare(password, user.password);
    
            if (!validPassword) {
                return done(null, false, { message: 'Contraseña incorrecta' });
            }
    
            return done(null, user);
        } catch (error) {
            return done(error);
        }
    }));    

    passport.serializeUser((user, done) => {
        if (!user._id) {
            return done(new Error("Usuario sin ID"));
        }
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            if (!user) {
                return done(new Error("Usuario no encontrado"));
            }
            done(null, user);
        } catch (error) {
            done(error);
        }
    });
};

// Función para extraer cookies
export const cookieExtractor = (req) => {
    let token = null;

    if (req && req.cookies) {
        token = req.cookies["jwtToken"];
    }

    return token;
};

export const generateAuthToken = (user) => {
    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    return token;
};

export const authToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const cookieToken = req.cookies.jwtToken;
    const token = authHeader ? authHeader.split(" ")[1] : cookieToken;

    if (!token) {
        return res.status(401).send({ status: "error", message: "No autorizado" });
    }

    jwt.verify(token, JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(401).send({ status: "error", message: "Unauthorized" });
        }

        req.user = user;
        next();
    });
};

const auth = {
    initializePassport,
    generateAuthToken
};

export default auth;