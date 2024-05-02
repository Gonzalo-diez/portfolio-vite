import Education from "../models/education.js";
import User from "../models/user.js";

const educationController = {
    getEducations: async (req, res) => {
        try {
            const educations = await Education.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(educations);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getEducationById: async(req, res) => {
        const educationId = req.params.id;

        try {
            const education = await Education.findOne({ _id: educationId }).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(education);
        }

        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createEducation: async (req, res) => {
        const { title, sub_title, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            const imageName = req.file ? req.file.filename : null;

            if (!imageName) {
                return res.status(400).json({ error: 'No se proporcionó una imagen válida' });
            }

            const newEducation = new Education({
                title,
                sub_title,
                image: imageName,
            });

            await newEducation.save();

            res.json({
                message: "Educacion agregada!",
                newEducation,
            })
        }
        catch (err) {
            console.error("Error al guardar la educación:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateEducation: async (req, res) => {
        const educationId = req.params.id;
        const { title, sub_title, userId } = req.body;

        try {
            const imageName = req.file ? req.file.filename : null;

            if (!imageName) {
                return res.status(400).json({ error: 'No se proporcionó una imagen válida' });
            }

            const user = await User.findById(userId).exec();
            const education = await Education.findById(educationId).exec();

            if (!education) {
                return res.status(404).json({ error: "Educación no encontrada" });
            }

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            if (education.user.toString() !== userId) {
                return res.status(403).json({ error: "No eres el autor" });
            }

            const updatedEducation = await Education.findByIdAndUpdate(
                educationId,
                {
                    title,
                    sub_title,
                    image: imageName,
                    user: userId
                },
                { new: true }
            )

            res.json({
                message: "Educación actualizada!",
                updatedEducation,
            })
        }
        catch (err) {
            console.error("Error en la actualización de la educación:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteEducation: async (req, res) => {
        const educationId = req.params.id;

        try {
            const deleteEducation = await Education.deleteOne({ _id: educationId });

            if (deleteEducation.deletedCount === 0) {
                return res.status(404).json({ error: "Educación no encontrada" });
            }

            return res.json("Educación eliminada!");
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default educationController;