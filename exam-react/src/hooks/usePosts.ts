import { useState } from "react";
import { getPosts } from "../services/getPosts";
import Post from "../models/Post";
import { useNavigate } from "react-router-dom";

const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      setIsLoading(true);
      const posts = await getPosts();
      setPosts(posts);
    } catch (error) {
      navigate("/not-found");
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { posts, isLoading, fetchPosts, error };
};

export default usePosts;
