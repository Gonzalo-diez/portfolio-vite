import educationService from "../dao/services/education.service.js";

const educationController = {
    getEducations: async (req, res) => {
        try {
            const educations = await educationService.getEducations();

            return res.json(educations);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getEducationById: async(req, res) => {
        const educationId = req.params.id;

        try {
            const education = await educationService.getEducationById(educationId);

            return res.json(education);
        }

        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createEducation: async (req, res) => {
        const educationData = req.body;
        const file = req.file;

        try {
            const newEducation = await educationService.createEducation(educationData, file);

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
        const educationUpdateData = req.body;
        const file = req.file;

        try {
            const updatedEducation = await educationService.updateEducation(educationId, educationUpdateData, file);

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
            const deleteEducation = await educationService.deleteEducation(educationId);

            if (deleteEducation.deletedCount === 0) {
                return res.status(404).json({ error: "Educación no encontrada" });
            }

            return res.json({
                message: "Educación eliminada",
                deleteEducation,
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default educationController;