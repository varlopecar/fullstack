import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageTemplate from './components/PageTemplate';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import PostPage from './components/PostPage';
import { PostContextProvider } from './contexts/PostContextProvider';

const Router = () => {
    const browserRouter = createBrowserRouter([
        {
            path: "/",
            element: <PageTemplate />,
            children: [
                {
                    path: '',
                    element: <HomePage />
                },
                {
                    path: '*',
                    element: <PageNotFound />
                },
                {
                    path: 'posts/:postId',
                    element: <PostContextProvider><PostPage /></PostContextProvider>,
                    children: [
                        {
                            path: 'detail',
                            element: <div>Details</div>
                        },
                        {
                            path: 'owner/:ownerId',
                            element: <div>Owner</div>
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <RouterProvider router={browserRouter} />
    );
};

export default Router;