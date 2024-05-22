import resumeService from "../dao/services/resume.service.js";

const resumeController = {
    getResume: async (req, res) => {
        try {
            const resume = await resumeService.getResume();

            return res.json(resume);
        } 
        catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createResume: async (req, res) => {
        const { userId } = req.body;

        try {
            const newResume = await resumeService.createResume(userId);

            res.json({
                message: "Curriculum agregado!",
                newResume,
            });
        }
        catch (err) {
            console.error("Error al guardar el curriculum:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getResumeById: async (req, res) => {
        const resumeId = req.params.id;

        try {
            const resume = await resumeService.getResumeById(resumeId);

            return res.json(resume);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateResume: async (req, res) => {
        const resumeId = req.params.id;
        const userId = req.body;

        try {
            const updatedResume = await resumeService.updateResume(resumeId, userId);

            res.json({
                message: "Currículum actualizado!",
                updatedResume,
            });
        }
        catch (err) {
            console.error("Error en la actualización del currículum:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteResume: async (req, res) => {
        const resumeId = req.params.id;

        try {
            const deleteResume = await resumeService.deleteResume(resumeId);

            if (deleteResume.deletedCount === 0) {
                return res.status(404).json({ error: "Curriculum no encontrado" });
            }

            return res.json("Curriculum eliminado!");
        } 
        catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default resumeController;