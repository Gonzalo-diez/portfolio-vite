import educationRepository from "../repositories/education.repository.js";
import EducationDTO from "../dao/DTO/education.dto.js";
import userRepository from "../repositories/user.repository.js";

const educationService = {
    getEducations: async () => {
        try {
            const educations = await educationRepository.getEducations();

            return educations;
        } 
        catch (error) {
            throw new Error("Error al obtener las educaciones:" + error.message)
        }
    },

    getEducationById: async (educationId) => {
        try {
            const education = await educationRepository.getEducationById( educationId);

            return education;
        }
        catch (error) {
            throw new Error("Error al obtener las educaciones:" + error.message)
        }
    },

    createEducation: async (educationData, file) => {
        const { title, userId } = educationData;

        try {
            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin");
            }

            const imageName = file ? file.filename : null;

            if (!imageName) {
                throw new Error("No se proporciono un archivo o imagen valido");
            }

            const educationDTO = new EducationDTO(title, imageName, userId);

            const newEducation = await educationRepository.createEducation(educationDTO);

            return newEducation;
        }
        catch (error) {
            throw new Error("Error al obtener las educaciones:" + error.message)
        }
    },

    updateEducation: async (educationId, educationUpdateData, file) => {
        const { title, userId } = educationUpdateData;

        try {
            const education = await educationRepository.getEducationById(educationId);

            if (!education) {
                throw new Error("Educación no encontrada");
            }

            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            const imageName = file ? file.filename : null;

            if (!imageName) {
                throw new Error("No se proporciono un archivo o imagen valido");
            }

            const educationDTO = new EducationDTO(title, imageName, userId);

            const updateEducation = await educationRepository.updateEducation(educationDTO, educationId);

            return updateEducation;
        }
        catch (error) {
            throw new Error("Error al obtener las educaciones:" + error.message)
        }
    },

    deleteEducation: async (educationId) => {
        try {
            const deleteEducation = await educationRepository.deleteEducation(educationId);

            return deleteEducation;
        } 
        catch (error) {
            throw new Error("Error al obtener las educaciones:" + error.message)
        }
    },
}

export default educationService;