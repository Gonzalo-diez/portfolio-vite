import workService from "../services/work.service.js";

const workController = {
    getWorks: async(req, res) => {
        try {
            const works = await workService.getWorks();

            return res.json(works);
        } 
        catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getWorkById: async(req, res) => {
        const workId = req.params.id;

        try {
            const work = await workService.getWorkById(workId);

            return res.json(work);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createWork: async(req, res) => {
        const workData = req.body;
        const file = req.file;

        try {
            const newWork = await workService.createWork(workData, file);

            res.json({
                message: "Trabajo agregado!",
                newWork,
            });
        }
        catch (err) {
            console.error("Error al guardar el trabajo:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateWork: async(req, res) => {
        const workId = req.params.id;
        const workUpdateData = req.body;
        const files = req.files;

        try {
            const updateWork = await workService.updateWork(workId, workUpdateData, files)

            res.json({
                message: "Trabajo actualizado!",
                updateWork,
            })
        }
        catch (err) {
            console.error("Error en la actualización del trabajo:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteWork: async(req, res) => {
        const workId = req.params.id;

        try {
            const deleteWork = await workService.deleteWork(workId);

            if (deleteWork.deletedCount === 0) {
                return res.status(404).json({ error: "Trabajo no encontrado" });
            }

            return res.json({
                message: "Trabajo eliminado!",
                deleteWork,
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default workController;