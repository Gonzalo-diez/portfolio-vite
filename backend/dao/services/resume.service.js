import resumeRepository from "../repositories/resume.repository.js";
import ResumeDTO from "../DTO/resume.dto.js";
import userRepository from "../repositories/user.repository.js";

const resumeService = {
    getResume: async () => {
        try {
            const resume = await resumeRepository.getResume();

            return resume;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createResume: async (userId) => {
        try {
            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            const pdfResume = req.files['pdf_resume'][0];
            const pdfSubResume = req.files['pdf_sub_resume'][0]; 
            const resume = req.files['resume'][0]; 
            const subResume = req.files['sub_resume'][0]; 

            const resumeDTO = new ResumeDTO(pdfResume, pdfSubResume, resume, subResume, userId);

            const newResume = await resumeRepository.createResume(resumeDTO);

            return newResume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getResumeById: async (resumeId) => {
        try {
            const resume = await resumeRepository.getResumeById(resumeId)

            return resume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateResume: async (resumeId, userId) => {
        try {
            const curriculum = await resumeRepository.getResumeById(resumeId);

            if (!curriculum) {
                throw new Error("Educación no encontrada");
            }

            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            if (curriculum.user.toString() !== userId) {
                throw new Error("Usted no es el admin");
            }

            const pdfResume = req.files['pdf_resume'][0].filename;
            const pdfSubResume = req.files['pdf_sub_resume'][0].filename;
            const resume = req.files['resume'][0].filename;
            const subResume = req.files['sub_resume'][0].filename;

            const resumeDTO = new ResumeDTO(pdfResume, pdfSubResume, resume, subResume, userId)

            const updateResume = await resumeRepository.updateResume(resumeId, resumeDTO);

            return updateResume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteResume: async (resumeId) => {
        try {
            const deleteResume = await resumeRepository.deleteResume(resumeId);

            return deleteResume;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default resumeService;