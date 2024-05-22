import Resume from "../models/resume.js";

const resumeRepository = {
    getResume: async (req, res) => {
        try {
            const resume = await Resume.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return resume;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    createResume: async (resumeDTO) => {
        try {
            const newResume = new Resume(resumeDTO);

            await newResume.save();

            return newResume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    getResumeById: async (resumeId) => {
        try {
            const resume = await Resume.findOne({ _id: resumeId }).populate({
                path: 'user',
                model: 'User',
            })

            return resume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    updateResume: async (resumeId, resumeDTO) => {
        try {
            const updateResume = await Resume.findByIdAndUpdate(resumeId, { $set: resumeDTO }, { new: true });

            return updateResume;
        }
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },

    deleteResume: async (resumeId) => {
        try {
            const deleteResume = await Resume.deleteOne({ _id: resumeId });

            return deleteResume;
        } 
        catch (error) {
            throw new Error("Error en la base de datos:" + error.message);
        }
    },
}

export default resumeRepository;