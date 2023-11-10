import { ReactNode, createContext } from "react";
import Post from "../models/Post";

type PostContextType = {
    post: Post | null;
}

const PostContext = createContext<PostContextType>({
    post: null
});

type PostContextProviderProps = {
    children: ReactNode;
}

const PostContextProvider = ({ children } : PostContextProviderProps) => {
    return (
        <PostContext.Provider value={{ post: null }}>
            {children}
        </PostContext.Provider>
    );
}

export { PostContextProvider, PostContext };