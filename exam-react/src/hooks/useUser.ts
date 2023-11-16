import { useEffect, useState } from "react";
import getUser from "../services/getUser";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "./usePostContext";
import User from "../models/User";

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const { post } = usePostContext();

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const user = await getUser(post?.userId);
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

