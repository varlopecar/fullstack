import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostPage = () => {
    const { postId } = useParams<{ postId: string }>();

    return (
        <>
            <Link to={`/detail`}>Detail</Link>
            <Link to={`/owner/${postId}`}>Owner</Link>
        </>
    );
};

export default PostPage;
