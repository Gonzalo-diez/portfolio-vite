import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";
import compression from "compression";
import expressStaticGzip from "express-static-gzip";
import __dirname from "./util.js";
import router from "./routes.js";
import auth from "./config/auth.js";
import passport from "./config/jwt.js";
import { PORT, SESSION_SECRET, MONGO_URL } from "./util.js";

const app = express();
const httpServer = http.createServer(app);

const mongoStore = MongoStore.create({
    mongoUrl: MONGO_URL,
    collectionName: 'sessions'
});

app.use(compression())

app.use(cookieParser());

auth.initializePassport();

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("Error de conexión a MongoDB:", err);
});

db.once("open", () => {
    console.log("Conexión a MongoDB exitosa");
});

app.use(express.json());

app.use(cors({
    origin: "https://portfolio-gonzalo-diez-buchanan.netlify.app",
    credentials: true
}));

// Session middleware
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        store: mongoStore,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    '/',
    expressStaticGzip(path.join(__dirname, 'public'), {
        enableBrotli: true,
        orderPreference: ['br', 'gz'],
        setHeaders: (res, path) => {
            res.setHeader('Cache-Control', 'public, max-age=31536000');
        },
    })
);


// Servidor HTTP
httpServer.listen(PORT || 8080, () => {
    console.log("Servidor conectado!!");
});