/* eslint-disable react/prop-types */
import "./App.css";
import AllRecipesPage from './pages/AllRecipesPage';
import RecipePage from './pages/RecipePage';
import LandingPage from "./pages/LandingPage";
import SearchBar_test from './component/SearchBar_test';
import DashboardPage from './pages/DashboardPage'
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LogInPage";

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
    //errorElement: <Error />,
    children: [
      {
    //     index: true,
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
    //   {
    //     path: "/registration",
    //     element: <RegistrationPage />,
    //     loader: registrationLoader
    //   },
    //   {
    //     path: "/profile/:userID",
    //     element: <ProfilePage />,
    //     loader: profileLoader
    //   },
    //   {
    //     path: "/generate",
    //     element: <GeneratePage />,
    //     loader: generateLoader
    //   },
    //   {
    //     path: "/sucess",
    //     element: <Success />,
    //     loader: successLoader
    //   },
      {
        path: "/recipes/:recipeID",
        element: <RecipePage />,
        //loader: receipeLoader
      },
      {
        path: "/recipes",
        element: <AllRecipesPage />,
        //loader: receipeLoader
      },
      {
          path: "/landing",
          element: <LandingPage />
      },
    //   {
    //     path: "sample",
    //     element: <samplePage />
    //   }
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
