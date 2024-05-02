import Works from "../models/works.js";
import User from "../models/user.js";

const workController = {
    getWorks: async(req, res) => {
        try {
            const works = await Works.find({}).populate({
                path: 'user',
                model: 'User',
            });
            return res.json(works);
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    getWorkById: async(req, res) => {
        const workId = req.params.id;

        try {
            const work = await Works.findOne({ _id: workId }).populate({
                path: 'user',
                model: 'User',
            });

            return res.json(work);
        }
        catch (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    createWork: async(req, res) => {
        const { title, sub_title, link, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            const imageName = req.file ? req.file.filename : null;

            if (!imageName) {
                return res.status(400).json({ error: 'No se proporcionó una imagen válida' });
            }

            const newWork = new Works({
                title,
                sub_title,
                link,
                image: imageName,
                user: userId,
            });

            await newWork.save();

            res.json({
                message: "Trabajo agregado!",
                newWork,
            });
        }
        catch (err) {
            console.error("Error al guardar el trabajo:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    updateWork: async(req, res) => {
        const workId = req.params.id;
        const { title, sub_title, link, userId } = req.body;

        try {
            const user = await User.findById(userId).exec();
            const work = await Works.findById(workId).exec();

            if (!work) {
                return res.status(404).json({ error: "Trabajo no encontrado" });
            }

            if (!user) {
                return res.status(404).json({ error: 'No esta logueado' });
            }

            if (work.user.toString() !== userId) {
                return res.status(403).json({ error: "No eres el autor" });
            }

            const imageName = req.file ? req.file.filename : null;

            const updatedWork = await Works.findByIdAndUpdate(
                workId,
                {
                    title,
                    sub_title,
                    link,
                    image: imageName,
                    user: userId
                },
                { new: true }
            )

            res.json({
                message: "Habilidad blanda actualizada!",
                updatedWork,
            })
        }
        catch (err) {
            console.error("Error en la actualización del trabajo:", err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },

    deleteWork: async(req, res) => {
        const workId = req.params.id;

        try {
            const deleteWork = await Works.deleteOne({ _id: workId });

            if (deleteWork.deletedCount === 0) {
                return res.status(404).json({ error: "Trabajo no encontrado" });
            }

            return res.json("Trabajo eliminado!");
        } catch (err) {
            console.error('Error:', err);
            return res.status(500).json({ error: "Error en la base de datos", details: err.message });
        }
    },
}

export default workController;