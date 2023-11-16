import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostPage = () => {
    const { postId } = useParams<{ postId: string }>();

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <Link to={`detail`}>Detail</Link>
            <Link to={`owner/${postId}`}>Owner</Link>
            <Outlet />
        </div>
    );
};

export default PostPage;
