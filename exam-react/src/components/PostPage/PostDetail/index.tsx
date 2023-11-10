import Post from "../../../models/Post";

interface PostDetailProps {
    post: Post;
}

const PostDetailPage = ({ post }: PostDetailProps) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetailPage;