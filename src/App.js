import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Body from './Components/Body';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUS';
import Error404 from './Components/Error404';
import RestaurantMenu from './Components/RestaurantMenu';
import userNameContext from './../Utils/userNameContext';

const AppComponent = () =>{

  return ( <div className="app">
    <userNameContext.Provider value={{userName:"sagun"}}>
        <Header />
        <Outlet/>
    </userNameContext.Provider>
    </div>
)}

const router = createBrowserRouter(
 [
  {
    path: "/",
    element: <AppComponent/>,
    children:[
  {
    path: "/",
    element: <Body />
  },
  {
    path: "/aboutUs",
    element: <AboutUs />
  },
  {
    path: "/contact",
    element: <ContactUs />
  },
  {
    path: "/restaurant/:resId",
    element: <RestaurantMenu />
  }
    ],
  errorElement: <Error404 />
  }
]
)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>)