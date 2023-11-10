import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContextProvider";
import { Link } from "react-router-dom";
import { getPost } from "../../services/getPosts";

const PostPage = () => {
    const { post } = useContext(PostContext);
    const { postId } = useParams<{ postId: string | undefined }>();

    useEffect(() => {
        getPost(postId);
    }, [postId]);

    return (
        <>
            <Link to="/detail">Details</Link>
            <Link to={`/owner/${post?.userId}`}>Owner</Link>
        </>
    );
};

export default PostPage;
