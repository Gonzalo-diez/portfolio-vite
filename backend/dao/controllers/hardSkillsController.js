import HardSkills from "../models/hardSkills.js";
import User from "../models/user.js";

const hardSkillsController = {
    getHardSkills: async (req, res) => {
        try {
            const hardSkills = await HardSkills.find({}).populate({
                path: 'user',
                model: 'User',
            });
            return res.json(hardSkills);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getHardSkillById: async(req, res) => {
        const hardId = req.params.id;

        try {
            const hardSkill = await HardSkills.findOne({ _id: hardId }).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(hardSkill);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createHardSkill: async (req, res) => {
        const { title, percentage, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            const newHardSkill = new HardSkills({
                title,
                percentage,
                user: userId,
            });

            await newHardSkill.save();

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
        const { title, percentage, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();
            const hardSkill = await HardSkills.findById(hardSkillId).exec();

            if (!hardSkill) {
                return res.status(404).json({ error: "Habilidad dura no encontrada" });
            }

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            if (hardSkill.user.toString() !== userId) {
                return res.status(403).json({ error: "No eres el autor" });
            }

            const updatedHardSkill = await HardSkills.findByIdAndUpdate(
                hardSkillId,
                {
                    title,      
                    percentage,
                    user: userId
                },
                { new: true }
            )

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
            const deleteHardSkill = await HardSkills.deleteOne({ _id: hardSkillId });

            if (deleteHardSkill.deletedCount === 0) {
                return res.status(404).json({ error: "Habilidad dura no encontrada" });
            }

            return res.json("Habilidad dura eliminada!");
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default hardSkillsController;