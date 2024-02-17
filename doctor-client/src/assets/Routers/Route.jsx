import {createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from '../Layouts/Root'
import ErrorPage from '../EmptyError/ErrorPage'
import DoctorsProfile from "../Pages/Singlepage/DoctorsProfile";
  const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root> </Root>,
      errorElement: <ErrorPage> </ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/doctor/:id',
            element: <DoctorsProfile/> 
        },
      ]
      
    },
  ]);
  export default Route