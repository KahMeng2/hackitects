import viteLogo from '/vite.svg'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main from "./layouts/Main";

function mainLoader() {
  return { }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/ >,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction
      },
      {
        path: "/login",
        element: <LoginPage />,
        loader: loginLoader
      },
      {
        path: "/profile",
        element: <ProfilePage />,
        loader: profileLoader
      },
      {
        path: "/generate",
        element: <GeneratePage />,
        loader: generateLoader
      },
      {
        path: "/sucess",
        element: <Success />,
        loader: successLoader
      },
      {
        path: ":recipe",
        element: <RecipePage />,
      },
      {
        path: "/default",
        element: <DefaultPage />
      }
    ]
  }
]);

function App() {
  return <div classname="App">
    <RouterProvider router={router} />
  </div>
}

export default App
