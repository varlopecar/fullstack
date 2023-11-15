import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <p>404 Page</p>
            <p>
                <Link to="/">Go to Home</Link>
            </p>
        </>
    );
}

export default PageNotFound;