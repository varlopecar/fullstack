import { Dispatch, SetStateAction, createContext } from "react";
import Post from "../models/Post";

type PostContextType = {
    post: Post | undefined;
    setPost: Dispatch<SetStateAction<Post | undefined>>;
}

const PostContext = createContext<PostContextType | undefined>(undefined);


export default PostContext;