import { useEffect } from 'react';
import axios from 'axios';

function UseFetchUser(userId, token, setUser) {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/user/protected/${userId}`, {
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