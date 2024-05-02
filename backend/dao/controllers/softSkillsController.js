import SoftSkills from "../models/softSkills.js";
import User from "../models/user.js";

const softSkillsController = {
    getSoftSkills: async(req, res) => {
        try {
            const softSkills = await SoftSkills.find({}).populate({
                path: 'user',
                model: 'User',
            });
            return res.json(softSkills);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getSoftSkillById: async(req, res) => {
        const softId = req.params.id;

        try {
            const softSkill = await SoftSkills.findOne({ _id: softId }).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(softSkill);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createSoftSkill: async(req, res) => {
        const { title, sub_title, percentage, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            const newSoftSkill = new SoftSkills({
                title,
                sub_title,  
                percentage,
                user: userId
            });

            await newSoftSkill.save();

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
        const { title, sub_title, percentage, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();
            const softSkill = await SoftSkills.findById(softSkillId).exec();

            if (!softSkill) {
                return res.status(404).json({ error: "Habilidad blanda no encontrada" });
            }

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            if (softSkill.user.toString() !== userId) {
                return res.status(403).json({ error: "No eres el autor" });
            }

            const updatedSoftSkill = await SoftSkills.findByIdAndUpdate(
                hardSkillId,
                {
                    title,
                    sub_title,
                    percentage,
                    user: userId
                },
                { new: true }
            )

            res.json({
                message: "Habilidad blanda actualizada!",
                updatedSoftSkill,
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
            const deleteSoftSkill = await SoftSkills.deleteOne({ _id: softSkillId });

            if (deleteSoftSkill.deletedCount === 0) {
                return res.status(404).json({ error: "Habilidad blanda no encontrada" });
            }

            return res.json("Habilidad blanda eliminada!");
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default softSkillsController;