import Education from "../dao/models/education.js";

const educationRepository = {
    getEducations: async () => {
        try {
            const educations = await Education.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return educations;
        } 
        catch (error) {
            throw new Error("Error al obtener las educaciones: " + error.message);
        }
    },

    getEducationById: async(educationId) => {
        try {
            const education = await Education.findOne({ _id: educationId }).populate({
                path: 'user',
                model: 'User',
            });

            return education;
        }
        catch (error) {
            throw new Error("Error al obtener la educación por ID: " + error.message);
        }
    },

    createEducation: async (educationData) => {
        try {
            const newEducation = new Education(educationData);
            
            await newEducation.save();

            return newEducation;
        }
        catch (error) {
            throw new Error("Error al crear una nueva educación: " + error.message);
        }
    },

    updateEducation: async (educationUpdateData, educationId) => {
        try {
            const updateEducation = await Education.findByIdAndUpdate(educationId, { $set: educationUpdateData }, { new: true });

            return updateEducation;
        }
        catch (error) {
            throw new Error("Error al crear una nueva educación: " + error.message);
        }
    },

    deleteEducation: async (educationId) => {
        try {
            const deleteEducation = await Education.deleteOne({ _id: educationId });

            if (deleteEducation.deletedCount === 0) {
                throw new Error("Educación no encontrada");
            }

            return deleteEducation;
        } 
        catch (error) {
            throw new Error("Error al crear una nueva educación: " + error.message);
        }
    },
}

export default educationRepository;