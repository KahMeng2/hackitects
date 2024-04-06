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
//import SearchBar from './component/SearchBar';
import { useState } from 'react';
import { SearchResultList } from './component/SearchResultList';



function mainLoader() {
  return { }
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/ >,
    loader: mainLoader,
    children: [
      {
        path: "/landing",
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
        path: "/search",
        element: <SearchPage />
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />      
    </div>
      
  );
}

export default App