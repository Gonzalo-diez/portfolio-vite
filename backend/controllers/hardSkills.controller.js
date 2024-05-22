import hardSkillsService from "../dao/services/hardSkill.service.js";

const hardSkillsController = {
    getHardSkills: async (req, res) => {
        try {
            const hardSkills = await hardSkillsService.getHardSkills();
            return res.json(hardSkills);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getHardSkillById: async(req, res) => {
        const hardSkillId = req.params.id;

        try {
            const hardSkill = await hardSkillsService.getHardSkillById(hardSkillId)

            return res.json(hardSkill);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createHardSkill: async (req, res) => {
        const hardSkillData = req.body;

        try {
            const newHardSkill = await hardSkillsService.createHardSkill(hardSkillData)

            res.json({
                message: "Habilidad dura agregada!",
                newHardSkill,
            });
        }
        catch (err) {
            console.error("Error al guardar la habilidad dura:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateHardSkill: async (req, res) => {
        const hardSkillId = req.params.id;
        const hardSkillUpdateData = req.body;

        try {
            const updatedHardSkill = await hardSkillsService.updateHardSkill(hardSkillId, hardSkillUpdateData);

            res.json({
                message: "Habilidad dura actualizada!",
                updatedHardSkill,
            })
        }
        catch (err) {
            console.error("Error en la actualización de la habilidad dura:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteHardSkill: async (req, res) => {
        const hardSkillId = req.params.id;

        try {
            const deleteHardSkill = await hardSkillsService.deleteHardSkill(hardSkillId);

            if (deleteHardSkill.deletedCount === 0) {
                return res.status(404).json({ error: "Hablidad dura no encontrada" });
            }

            return res.json({
                message: "Habilidad dura eliminada!",
                deleteHardSkill,
            });
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default hardSkillsController;