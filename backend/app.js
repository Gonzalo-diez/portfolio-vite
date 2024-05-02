import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import passport from "./config/passport-jwt-config.js";
import session from "express-session";
import { Server } from "socket.io";
import path from "path";
import __dirname from "./util.js";
import router from "./routes.js";
import auth from "./config/passport-config.js";

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

auth.initializePassport();

mongoose.connect(`mongodb://localhost:27017/portfolio`, {
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
    origin: "http://localhost:5173",
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
app.use(express.static(path.join(__dirname, 'workImg')));
app.use(express.static(path.join(__dirname, 'eduImg')));
app.use(express.static(path.join(__dirname, 'resumeFiles')));

io.on("connection", socket => {
    console.log("Nuevo cliente conectado!!");
});

const PORT = 8800;

// Servidor HTTP
httpServer.listen(PORT, () => {
    console.log("Servidor conectado!!");
});