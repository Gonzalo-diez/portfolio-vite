import passport from "passport";
import jwt from "jsonwebtoken";
import GitHubStrategy from "passport-github2";
import User from "../dao/models/user.js";
import {
    JWT_SECRET,
    ALLOWED_USERNAME,
    GITHUB_CALLBACK_URL,
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
} from "../util.js";

const initializePassport = () => {
    passport.use(
        "github",
        new GitHubStrategy(
            {
                clientID: process.env.GITHUB_CLIENT_ID || GITHUB_CLIENT_ID,
                clientSecret: process.env.GITHUB_CLIENT_SECRET || GITHUB_CLIENT_SECRET,
                callbackURL: process.env.GITHUB_CALLBACK_URL || GITHUB_CALLBACK_URL,
            },
            async function (accessToken, refreshToken, profile, done) {
                const allowedUsername = process.env.ALLOWED_USERNAME || ALLOWED_USERNAME;
                
                try {
                    let user = await User.findOne({ githubId: profile.id });
    
                    if (!user && profile.username === allowedUsername) {
                        user = new User({
                            username: profile.username,
                            email: profile.emails[0].value,
                            githubId: profile.id,
                        });
    
                        await user.save();
                    }
    
                    if (user) {
                        return done(null, user);  
                    } else {
                        return done(null, false, { message: 'Acceso denegado.' });
                    }
                } catch (error) {
                    return done(error);
                }
            }
        )
    );    

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