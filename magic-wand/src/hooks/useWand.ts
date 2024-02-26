/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';
import axios from '../api/axios';
import Wand from '../types/wand';
import AuthContext from '../context/AuthProvider';
import { AxiosError } from 'axios';

interface useWandProps {
  id: string | undefined;
}

const useWand = (props: useWandProps) => {
  const { auth } = useContext(AuthContext) || {};
  const [wand, setWand] = useState<Wand>({
    flexibility: '',
    owner: { username: '' },
    length: 0,
    wood: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<AxiosError>();

  const { id } = props;

  const fetchWand = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/wands/${id}`, {
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
      });
      if (response.status !== 200) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setWand(response.data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error);
      }
    }
  };

  useEffect(() => {
    fetchWand();
  }, [props.id]);

  return { wand, isLoading, error };
};

export default useWand;
