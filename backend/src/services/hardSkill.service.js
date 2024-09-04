import hardSkillsRepository from "../repositories/hardSkills.repository.js";
import HardSkillDTO from "../dao/DTO/hardSkills.dto.js";
import userRepository from "../repositories/user.repository.js";

const hardSkillsService = {
    getHardSkills: async () => {
        try {
            const hardSkills = await hardSkillsRepository.getHardSkills();
            return hardSkills;
        } 
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    getHardSkillById: async(hardSkillId) => {
        try {
            const hardSkill = await hardSkillsRepository.getHardSkillById(hardSkillId);

            return hardSkill;
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    createHardSkill: async (hardSkillData) => {
        const { title, sub, percentage, userId } = hardSkillData;

        try {
            const user = await userRepository.findById(userId);

            if(!title || !sub || isNaN(percentage)) {
                throw new Error("Falta completar campos");
            }

            if (!user) {
                throw new Error("Usted no es admin");
            }

            const hardSkillDTO = new HardSkillDTO(title, sub, percentage, userId);

            const newHardSkill = await hardSkillsRepository.createHardSkill(hardSkillDTO);

            return newHardSkill;
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    updateHardSkill: async (hardSkillId, hardSkillUpdateData) => {
        const { title, sub, percentage, userId } = hardSkillUpdateData;

        try {
            const hardSkill = await hardSkillsRepository.getHardSkillById(hardSkillId);

            if (!hardSkill) {
                throw new Error("Educación no encontrada");
            }

            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            const hardSkillDTO = HardSkillDTO(title, sub, percentage, userId);

            const updateHardSkill = await hardSkillsRepository.updateHardSkill(hardSkillId, hardSkillDTO);

            return updateHardSkill;
        }
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },

    deleteHardSkill: async (hardSkillId) => {
        try {
            const deleteHardSkill = await hardSkillsRepository.deleteHardSkill(hardSkillId);

            return deleteHardSkill;
        } 
        catch (error) {
            throw new Error ("Error en la base de datos:" + error.message)
        }
    },
}

export default hardSkillsService;