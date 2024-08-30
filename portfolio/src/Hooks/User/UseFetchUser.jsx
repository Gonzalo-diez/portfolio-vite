import { useEffect } from 'react';
import axios from 'axios';

function UseFetchUser(userId, token, setUser) {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Token:", token);
        console.log("ID:", userId);
        const res = await axios.get(`https://portfolio-vite.onrender.com/user/protected/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (res.status === 200) {
          setUser(res.data);
        } else {
          console.error("Unexpected server response structure:", res.data);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
      }
    };

    fetchUser();
  }, [userId, token, setUser]);
}

export default UseFetchUser;