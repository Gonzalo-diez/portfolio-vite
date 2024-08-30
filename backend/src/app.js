import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import session from "express-session";
import path from "path";
import cookieParser from "cookie-parser";
import __dirname from "./util.js";
import router from "./routes.js";
import auth from "./config/auth.js";
import passport from "./config/jwt.js";
import { MONGO_URL, PORT } from "./util.js";

const app = express();
const httpServer = http.createServer(app);

app.use(cookieParser());

auth.initializePassport();

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", (err) => {
    console.error("Error de conexión a MongoDB:", err);
});

db.once("open", () => {
    console.log("Conexión a MongoDB exitosa");
});

app.use(express.json());

app.use(cors({
    origin: "https://portfolio-vite.onrender.com/",
    credentials: true
}));

// Session middleware
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", router);
app.use(express.static(path.join(__dirname, 'public')));

// Servidor HTTP
httpServer.listen(PORT || 8080, () => {
    console.log("Servidor conectado!!");
});