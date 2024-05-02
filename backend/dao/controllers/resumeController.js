import Resume from "../models/resume.js";
import User from "../models/user.js";

const resumeController = {
    getResume: async (req, res) => {
        try {
            const resume = await Resume.find({}).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(resume);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getResumeById: async (req, res) => {
        const resumeId = req.params.id;

        try {
            const resume = await Resume.findOne({ _id: resumeId }).populate({
                path: 'user',
                model: 'User',
            })

            return res.json(resume);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateResume: async (req, res) => {
        const resumeId = req.params.id;
        const userId = req.body;

        try {
            const user = await User.findById(userId).exec();
            const resumeDetail = await Resume.findById(resumeId).exec();

            if (!resumeDetail) {
                return res.status(404).json({ error: "Currículum no encontrado" });
            }

            if (!user) {
                return res.status(404).json({ error: 'No está logueado' });
            }

            if (resumeDetail.user.toString() !== userId) {
                return res.status(403).json({ error: "No eres el autor" });
            }

            const pdfResume = req.files['pdf_resume'][0].filename;
            const pdfSubResume = req.files['pdf_sub_resume'][0].filename;
            const resume = req.files['resume'][0].filename;
            const subResume = req.files['sub_resume'][0].filename;

            const updatedResume = await Resume.findByIdAndUpdate(
                resumeId,
                {
                    pdf_resume: pdfResume,
                    pdf_sub_resume: pdfSubResume,
                    resume: resume,
                    sub_resume: subResume,
                    user: userId
                },
                { new: true }
            );

            res.json({
                message: "Currículum actualizado!",
                updatedResume,
            });
        }
        catch (err) {
            console.error("Error en la actualización del currículum:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    }

}

export default resumeController;