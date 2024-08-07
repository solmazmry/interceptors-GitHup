import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const useUserData = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/users/${username}`);
      // data menimsedirik
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //username deyishende bu funksiyani ishled
  useEffect(() => {
    fetchData();
  }, [username]);

  return { data, loading };
};

export default useUserData;
