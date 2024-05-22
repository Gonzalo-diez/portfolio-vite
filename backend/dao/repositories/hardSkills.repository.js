import HardSkills from "../models/hardSkills.js";

const hardSkillsRepository = {
    getHardSkills: async () => {
        try {
            const hardSkills = await HardSkills.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return hardSkills;
        } 
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    getHardSkillById: async(hardSkillId) => {
        try {
            const hardSkill = await HardSkills.findOne({ _id: hardSkillId }).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(hardSkill);
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    createHardSkill: async (hardSkillData) => {
        try {
            const newHardSkill = new HardSkills(hardSkillData);

            newHardSkill.save();

            return newHardSkill;
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    updateHardSkill: async (hardSkillId, hardSkillUpdateData) => {
        try {
            const updatedHardSkill = await HardSkills.findByIdAndUpdate(hardSkillId, { $set: hardSkillUpdateData }, { new: true });

            return updatedHardSkill;
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    deleteHardSkill: async (hardSkillId) => {
        try {
            const deleteHardSkill = await HardSkills.deleteOne({ _id: hardSkillId });

            if (deleteHardSkill.deletedCount === 0) {
                throw new Error("Habilidad dura no encontrada");
            }

            return deleteHardSkill;
        } 
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },
}

export default hardSkillsRepository;