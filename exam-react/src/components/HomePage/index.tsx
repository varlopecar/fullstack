import { Link } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

const HomePage = () => {
    const { posts, isLoading, error } = usePosts();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>There was an error fetching the posts. Please try again later.</div>
    }

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    <Link to={`/posts/${post.id}`}>
                        <p>{post.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default HomePage;