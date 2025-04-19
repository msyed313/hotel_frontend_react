import React from 'react'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Layout from './Layout'
import Home from './Customer_dashboard/Home'
import Rooms from './Customer_dashboard/Rooms'
import Booking from './Customer_dashboard/Booking'
import AboutUs from './Customer_dashboard/AboutUs'
import RoomDetailComponent from './components/RoomDetailComponent'
import ContactUs from './Customer_dashboard/ContactUs'
function App() {
  const route=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
    
    children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/rooms",
          element:<Rooms/>
        },
        {
          path:"/booking",
          element:<Booking/>
        },
        {
          path:"/aboutus",
          element:<AboutUs/>
        },
        {
          path:"/room-details/:id",
          element:<RoomDetailComponent/>
        },
        {
          path:"/contactus",
          element:<ContactUs/>
        }
    ]
  },
  ])
  return (
    <RouterProvider router={route} />
  )
}

export default App