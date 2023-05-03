import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './components/providers/AuthProvider';
import Main from './components/layout/Main';
import Home from './components/pages/Home/Home';
import Blog from './components/pages/Blog/Blog';
import Login from './components/pages/Login/Login';
import Register from './components/pages/Login/Register/Register';
import Error from './Error';
import Chef from './components/pages/Home/Chef/Chef';
import ChefRecipes from './components/pages/Home/Chef/ChefRecipes';
import RecipeDetails from './components/layout/RecipeDetails';
import PrivateRoute from './components/routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: ':id',
        element: <Chef></Chef>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '*',
        element: <Error></Error>
      }
    ]
  },
  {
    path: '/recipe-details',
    element: <RecipeDetails></RecipeDetails>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefRecipes></ChefRecipes></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/recipes/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </AuthProvider>
)
