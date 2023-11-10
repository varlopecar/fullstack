import { Outlet, useNavigate } from "react-router-dom";

const PageTemplate = () => {
    const navigate = useNavigate();

    return (
        <>
            <header>
                <h1><a href="" onClick={() => navigate("/")}>React Typescript Exam</a></h1>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>Par <i>Carlos Vargas</i> le <time dateTime="2023-11-10">10/11/2023</time></p>
            </footer>
        </>
    );
}

export default PageTemplate;