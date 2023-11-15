import { useEffect, useState } from "react";
import { getPost } from "../services/getPosts";
import Post from "../models/Post";
import { useNavigate } from "react-router-dom";

export function useSinglePost(id: string | undefined) {
  const [post, setPost] = useState<Post | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const post = await getPost(id);
      setPost(post);
    } catch (error) {
      navigate("/not-found");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return { post, isLoading, error };
}
