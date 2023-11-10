import Post from "../models/Post";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    const posts: Post[] = await response.json();

    return posts;
  } catch (error) {
    throw new Error("Error while fetching posts");
  }
};

export const getPost = async (id: string | undefined) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    const post: Post = await response.json();

    return post;
  } catch (error) {
    throw new Error("Error while fetching post");
  }
};