import SoftSkills from "../dao/models/softSkills.js";

const softSkillsRepository = {
    getSoftSkills: async(req, res) => {
        try {
            const softSkills = await SoftSkills.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return softSkills;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getSoftSkillById: async(softSkillId) => {
        try {
            const softSkill = await SoftSkills.findOne({ _id: softSkillId }).populate({
                path: 'user',
                model: 'User',
            });

            return softSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createSoftSkill: async(softSkillDTO) => {
        try {
            const newSoftSkill = new SoftSkills(softSkillDTO);

            await newSoftSkill.save();

            return newSoftSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateSoftSkill: async(softSkillId, softSkillUpdateData) => {
        try {
            const updateSoftSkill = await SoftSkills.findByIdAndUpdate(
                softSkillId,
                {
                    $set: softSkillUpdateData
                },
                { new: true }
            );

            return updateSoftSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteSoftSkill: async(softSkillId) => {
        try {
            const deleteSoftSkill = await SoftSkills.deleteOne({ _id: softSkillId });

            return deleteSoftSkill;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default softSkillsRepository;