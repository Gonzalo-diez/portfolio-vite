import WorkDTO from "../DTO/work.dto.js";
import workRepository from "../repositories/work.repository.js";
import userRepository from "../repositories/user.repository.js";

const workService = {
    getWorks: async() => {
        try {
            const works = await workRepository.getWorks();

            return works;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getWorkById: async(workId) => {
        try {
            const work = await workRepository.getWorkById(workId);

            return work;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createWork: async(workData, files) => {
        const { title, sub_title, link, userId } = workData;

        try {
            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            const imageName = files ? files.filename : null;

            if (!imageName) {
                return res.status(400).json({ error: 'No se proporcionó una imagen válida' });
            }

            const workDTO = new WorkDTO(title, sub_title, link, imageName, userId);

            const newWork = await workRepository.createWork(workDTO);

            return newWork;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateWork: async(workId, workUpdateData, files) => {
        const { title, sub_title, link, userId } = workUpdateData;

        try {
            const work = await workRepository.getWorkById(workId);

            if (!work) {
                throw new Error("Educación no encontrada");
            }

            const user = await userRepository.findById(userId);

            if (!user) {
                throw new Error("Usted no es el admin o no esta logueado");
            }

            if (work.user.toString() !== userId) {
                throw new Error("Usted no es el admin");
            }

            const imageName = files ? files.filename : null;

            const workDto = new WorkDTO(title, sub_title, link, imageName, userId)

            const updateWork = await workRepository.updateWork(workId, workDto)

            return updateWork;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteWork: async(workId) => {
        try {
            const deleteWork = await workRepository.deleteWork(workId)

            return deleteWork;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default workService;