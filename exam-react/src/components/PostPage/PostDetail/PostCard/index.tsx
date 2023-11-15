import Post from "../../../../models/Post";

interface PostCardProps {
  post: Post | undefined;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div>
      <div>
        <h5>{post?.title}</h5>
        <p>{post?.body}</p>
      </div>
    </div>
  );
};

export default PostCard;
