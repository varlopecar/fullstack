import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <p>404 Page</p>
            <p>
                <a href="" onClick={() => navigate("/")}>Go to home page</a>
            </p>
        </>
    );
}

export default PageNotFound;