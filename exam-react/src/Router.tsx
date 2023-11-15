import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PostContextProvider } from './hooks/usePostContext';
import PageTemplate from './components/PageTemplate';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import PostPage from './components/PostPage';
import PostDetailPage from './components/PostPage/PostDetail';
import PostOwnerPage from './components/PostPage/PostOwner';

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