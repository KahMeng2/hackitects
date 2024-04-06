/* eslint-disable react/prop-types */
import "./App.css";
import AllRecipesPage from './pages/AllRecipesPage';
import RecipePage from './pages/RecipePage';
import LandingPage from "./pages/LandingPage";
import DashboardPage from './pages/DashboardPage'
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LogInPage";
import MealPlannerPage from "./pages/MealPlannerPage";
import SearchPage from "./pages/SearchPage";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main from '../layouts/main';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/ >,
    children: [
      {
        index: true,
        element: <LandingPage />
      },
      {
          path: "/dashboard",
          element: <DashboardPage />,
      },
      {
          path: "/login",
          element: <LoginPage />,
      },
      {
          path: "/signup",
          element: <SignUpPage/>
      },
     {
        path: "/meal-planner",
        element: <MealPlannerPage />,
      },

      {
        path: "/recipes/:recipeID",
        element: <RecipePage />,
      },
      {
        path: "/recipes",
        element: <AllRecipesPage />,
      },
      {
        path: "/generate",
        element: <SearchPage />
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />  
      <ToastContainer />    
    </div>
      
  );
}

export default App