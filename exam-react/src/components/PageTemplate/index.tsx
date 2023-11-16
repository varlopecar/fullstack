import { Outlet, Link } from "react-router-dom";

const PageTemplate = () => {
    return (
        <>
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>
                    Exam Typescript React
                </h1>
                <nav>
                    <Link to="/">Home</Link>
                </nav>
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