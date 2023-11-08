import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Page404 from "../pages/Page404";
import UserPage from "../pages/UserPage";
import UserBasicInfo from "../pages/UserPage/UserBasicInfo";
import UserAddress from "../pages/UserPage/UserAddress";
import UserContextProvider from "../contexts/UserContextProvider";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/users/:id",
      element: <UserPage />,
      children: [
        {
          path: "basic-info",
          element: <UserBasicInfo />,
        },
        {
          path: "address",
          element: <UserAddress />,
        },
      ],
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}
