import softSkillsService from "../services/softSkill.service.js";

const softSkillsController = {
    getSoftSkills: async(req, res) => {
        try {
            const softSkills = await softSkillsService.getSoftSkills();

            return res.json(softSkills);
        } 
        catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getSoftSkillById: async(req, res) => {
        const softSkillId = req.params.id;

        try {
            const softSkill = await softSkillsService.getSoftSkillById(softSkillId)

            return res.json(softSkill);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createSoftSkill: async(req, res) => {
        const softSkillData = req.body;

        try {
            const newSoftSkill = await softSkillsService.createSoftSkill(softSkillData);

            res.json({
                message: "Habilidad blanda agregada",
                newSoftSkill,
            });
        }
        catch (err) {
            console.error("Error al guardar la habilidad blanda:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateSoftSkill: async(req, res) => {
        const softSkillId = req.params.id;
        const softSkillUpdateData = req.body;

        try {
            const updateSoftSkill = await softSkillsService.updateSoftSkill(softSkillId, softSkillUpdateData)

            res.json({
                message: "Habilidad blanda actualizada!",
                updateSoftSkill,
            })
        }
        catch (err) {
            console.error("Error en la actualización de la habilidad blanda:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteSoftSkill: async(req, res) => {
        const softSkillId = req.params.id;

        try {
            const deleteSoftSkill = await softSkillsService.deleteSoftSkill(softSkillId);

            if (deleteSoftSkill.deletedCount === 0) {
                return res.status(404).json({ error: "Habilidad blanda no encontrada" });
            }

            return res.json({
                message: "Habilidad blanda eliminada!",
                deleteSoftSkill,
            });
        } 
        catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default softSkillsController;