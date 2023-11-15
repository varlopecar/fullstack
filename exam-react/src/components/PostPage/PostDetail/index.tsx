import { usePostContext } from "../../../hooks/usePostContext";
import PostCard from "./PostCard";

const PostDetailPage = () => {
    const { post } = usePostContext();

    console.log('post', post);

    return (
        <div>
            <PostCard post={post} />
        </div>
    );
};

export default PostDetailPage;