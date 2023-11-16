import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { PostContextProvider } from '../hooks/usePostContext';
import PageTemplate from '../components/PageTemplate';
import HomePage from '../pages/HomePage';
import PageNotFound from '../pages/PageNotFound';
import PostPage from '../pages/PostPage';
import PostDetailPage from '../pages/PostPage/PostDetail';
import PostOwnerPage from '../pages/PostPage/PostOwner';

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
                    element:
                        <PostContextProvider>
                            <PostPage />
                        </PostContextProvider>,
                    children: [
                        {
                            path: '',
                            element: <Navigate to="detail" replace={true} />
                        },
                        {
                            path: 'detail',
                            element: <PostDetailPage />
                        },
                        {
                            path: 'owner/:ownerId',
                            element: <PostOwnerPage />
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