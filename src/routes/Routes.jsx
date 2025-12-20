
import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
import AllLoans from '../Pages/AllLoans'
import Details from '../Pages/Details'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/all',
                element:<AllLoans></AllLoans>

            },
            {
                path:'/details/:id',
                element:<PrivateRoute>
                    <Details></Details>
                </PrivateRoute>
            }
        ]
  
    }
])
