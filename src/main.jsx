import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import 'react-tooltip/dist/react-tooltip.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './Layout/Root';
import Home from './components/HomePages/Home/Home';
import Blog from './components/Blog/Blog';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoutes from './routes/PrivateRoutes';
import ChefDetails from './components/ChefDetails/ChefDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/chefs/:id",
        element: <PrivateRoutes><ChefDetails></ChefDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://chef-recipe-assignment-server-pritrirajpartho.vercel.app/chefs/${params.id}`)
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
           <RouterProvider router={router}></RouterProvider>
       </AuthProvider>
  </React.StrictMode>,
)
