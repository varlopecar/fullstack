import { useState } from "react";
import { getPost } from "../services/getPosts";
import { useNavigate } from "react-router-dom";
import { usePostContext } from "./usePostContext";

export function useSinglePost(id: string | undefined) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const { setPost } = usePostContext();

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const post = await getPost(id);
      console.log(post);
      setPost(post);
    } catch (error) {
      navigate("/not-found");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, fetchPost };
}
