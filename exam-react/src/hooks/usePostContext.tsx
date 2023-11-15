import { ReactNode, useContext, useState } from 'react';
import PostContext from '../contexts/PostContext';
import Post from '../models/Post';

interface PostContextProviderProps {
    children: ReactNode;
}

const PostContextProvider = ({ children }: PostContextProviderProps) => {
    const [post, setPost] = useState<Post | undefined>(undefined);

    return (
        <PostContext.Provider value={{ post, setPost }}>
            {children}
        </PostContext.Provider>
    );
};

const usePostContext = () => {
    const context = useContext(PostContext);

    if (context === undefined) {
        throw new Error('usePostContext must be used within a PostContextProvider');
    }

    return context;
}

export { PostContextProvider, usePostContext };