import { useEffect, useState } from "react";
import axios from "../api/axios";
import Wand from "../types/wand";

const useWands = () => {
  const [wands, setWands] = useState<Wand[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);

  const fetchWands = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/wands/get-wands");
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      setWands(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchWands();
  }, []);

  return { wands, isLoading, error };
};

export default useWands;
