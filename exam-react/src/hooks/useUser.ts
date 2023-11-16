import { useEffect, useState } from "react";
import getUser from "../services/getUser";
import User from "../models/User";
import { useNavigate } from "react-router-dom";

export function useUser(id: string | undefined) {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const user = await getUser(id);
      setUser(user);
    } catch (error) {
      navigate("/not-found");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, isLoading, error };
}

