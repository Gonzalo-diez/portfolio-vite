import multer from "multer";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });

export const PORT = process.env.PORT;
export const MONGO_URL = process.env.MONGO_URL;
export const JWT_SECRET = process.env.JWT_SECRET;
export const ALLOWED_EMAIL = process.env.ALLOWED_EMAIL;
export const ALLOWED_PASSWORD = process.env.ALLOWED_PASSWORD;
export const NETLIFY_URL = process.env.NETLIFY_URL;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const BASE_MONGO = process.env.BASE_MONGO;
export const BASE_URL = process.env.BASE_URL;
export const BASE_GITHUB_CALLBACK_URL = process.env.BASE_GITHUB_CALLBACK_URL;

export function configureWorkMulter() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'public/workImg'));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    });    

    return multer({ storage: storage });
};

export function configureEducationMulter() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'public/eduImg'));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    });    

    return multer({ storage: storage });
};

export default __dirname;