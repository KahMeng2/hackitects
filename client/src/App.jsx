/* eslint-disable react/prop-types */
//import viteLogo from '/vite.svg'
import "./App.css";
import AllRecipesPage from './pages/AllRecipesPage';
import RecipePage from './pages/RecipePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Layouts
import Main from '../layouts/main';
import SearchBar from './component/SearchBar';
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
    //   {
    //     index: true,
    //     element: <Dashboard />,
    //     loader: dashboardLoader,
    //     action: dashboardAction
    //   },
    //   {
    //     path: "/login",
    //     element: <LoginPage />,
    //     loader: loginLoader
    //   },
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
          element: <landingPage />
      },
    //   {
    //     path: "sample",
    //     element: <samplePage />
    //   }
    ]
  }
]);

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
    <RouterProvider router={router} />
    <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        <SearchResultList results={results} />
      </div>
    </div>
  );
}

export default App
