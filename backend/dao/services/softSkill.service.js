import softSkillsRepository from "../repositories/softSkills.repository.js";
import SoftSkillDTO from "../DTO/softSkills.dto.js";
import userRepository from "../repositories/user.repository.js";

const softSkillsService = {
    getSoftSkills: async() => {
        try {
            const softSkills = await softSkillsRepository.getSoftSkills();

            return softSkills;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getSoftSkillById: async(softSkillId) => {
        try {
            const softSkill = await softSkillsRepository.getSoftSkillById(softSkillId);

            return softSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createSoftSkill: async(softSkillData) => {
        const { title, sub_title, percentage, userId } = softSkillData;

        try {
            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            const softSkillDTO = new SoftSkillDTO(title, sub_title, percentage, userId);

            const newSoftSkill = await softSkillsRepository.createSoftSkill(softSkillDTO);

            return newSoftSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateSoftSkill: async(softSkillId, softSkillUpdateData) => {
        const { title, sub_title, percentage, userId } = softSkillUpdateData;

        try {
            const softSkill = await softSkillsRepository.getSoftSkillById(softSkillId);

            if (!softSkill) {
                throw new Error("Educación no encontrada");
            }

            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            if (softSkill.user.toString() !== userId) {
                throw new Error("Usted no es el admin");
            }

            const softSkillDTO = new SoftSkillDTO(title, sub_title, percentage, userId);

            const updateSoftSkill = await softSkillsRepository.updateSoftSkill(softSkillId, softSkillDTO);

            return updateSoftSkill;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteSoftSkill: async(softSkillId) => {
        try {
            const deleteSoftSkill = await softSkillsRepository.deleteSoftSkill(softSkillId);

            return deleteSoftSkill;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default softSkillsService;