import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UseAddWork(token, userId) {
  const [title, setTitle] = useState("");
  const [sub, setSub] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddWork = async () => {
    if (!token) {
      console.log("Debes estar autenticado para agregar el trabajo.");
      navigate("/usuarios/login");
      return;
    }

    setError(null);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("sub", sub);
      formData.append("link", link);
      formData.append("image", image);
      formData.append("userId", userId);

      const response = await axios.post("https://portfolio-vite.onrender.com/works/protected/addWork", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        navigate("/");
      } else {
        console.log("Error al intentar subir el trabajo");
      }
    } catch (err) {
      console.error("Error al agregar trabajo:", err);
      setError(err);
    }
  };

  const handleSaveWorkImage = (e) => {
    setImage(e.target.files[0]);
  };

  return {
    title,
    setTitle,
    sub,
    setSub,
    link,
    setLink,
    image,
    handleSaveWorkImage,
    handleAddWork,
    error,
  };
}

export default UseAddWork;