/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Wand from '../types/wand';

interface useWandProps {
  id: any;
}

const useWand = (props: useWandProps) => {
  const [wand, setWand] = useState<Wand>({
    flexibility: '',
    owner: { username: '' },
    length: 0,
    wood: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(false);

  const { id } = props;

  const fetchWand = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/wands/get-wands/${id}`);
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setWand(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchWand();
  }, [props.id]);

  return { wand, isLoading, error };
};

export default useWand;
