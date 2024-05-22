import Works from "../models/works.js";

const workRepository = {
    getWorks: async() => {
        try {
            const works = await Works.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return works;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getWorkById: async(workId) => {
        try {
            const work = await Works.findOne({ _id: workId }).populate({
                path: 'user',
                model: 'User',
            });

            return work;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createWork: async(workDTO) => {
        try {
            const newWork = new Works(workDTO);

            await newWork.save();

            return newWork;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateWork: async(workId, workDTO) => {
        try {
            const updateWork = await Works.findByIdAndUpdate(workId, { $set: workDTO }, { new: true });

            return updateWork;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteWork: async(workId) => {
        try {
            const deleteWork = await Works.deleteOne({ _id: workId });

            return deleteWork;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default workRepository;