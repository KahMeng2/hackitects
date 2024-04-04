import viteLogo from '/vite.svg'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function mainLoader() {
  const userName = fetchData("userName");
  return { userName }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/ >,
    loader: mainLoader,
    errorElement: <Error />,
    children: [

    ]
  }
]);

function App() {
  return <div classname="App">
    <RouterProvider router={router} />
  </div>
}

export default App
