import multer from "multer";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, './.env') });

export const JWT_SECRET = process.env.JWT_SECRET;

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
}

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
}

export function configureResumeMulter() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, 'public/resumeFiles'));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        },
    });    

    return multer({ storage: storage });
}

export default __dirname;