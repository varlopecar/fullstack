import { useEffect } from "react";
import PostCard from "../../../components/PostPage/PostDetail/PostCard";
import { usePostContext } from "../../../hooks/usePostContext";
import { useSinglePost } from "../../../hooks/useSinglePost";
import { useParams } from "react-router-dom";

const PostDetailPage = () => {
    const { post } = usePostContext();
    const { postId } = useParams<{ postId: string }>();
    const { fetchPost } = useSinglePost(postId);

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            <PostCard post={post} />
        </div>
    );
};

export default PostDetailPage;