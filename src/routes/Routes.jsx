
import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Pages/Home'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import PrivateRoute from './PrivateRoute'
import AllLoans from '../Pages/AllLoans'
import Details from '../Pages/Details'
import LoanApplication from '../Pages/LoanApplication'
import Dashboard from '../Pages/Dashboard'
import ManageUser from '../Components/ManageUser'
import AllLoan from '../Components/AllLoan'
import DLoanApplication from '../Components/DLoanApplication'
import AddLoan from '../Components/AddLoan'
import ManageLoans from '../Components/ManageLoans'
import PendingLoan from '../Components/PendingLoan'
import ApprovedLoan from '../Components/ApprovedLoan'

import MyLoans from '../Components/MyLoans'
import BorrowerProfile from '../Components/BorrowerProfile'

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
            },
            {
                path:'/application/:id',
                element:<PrivateRoute>
                    <LoanApplication></LoanApplication>
                </PrivateRoute>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
                children:[
                    {
                        path:'/dashboard/manage-users',
                        element:<ManageUser></ManageUser>
                    },
                    {
                        path:'/dashboard/all-loan',
                        element:<AllLoan></AllLoan>
                    },
                    {
                        path:'/dashboard/loan-application',
                        element:<DLoanApplication></DLoanApplication>
                    },
                    {
                        path:'/dashboard/add-loan',
                        element:<AddLoan></AddLoan>
                    },
                    {
                        path:'/dashboard/manage-loans',
                        element:<ManageLoans></ManageLoans>
                    },
                    {
                        path:'/dashboard/pending-loans',
                        element:<PendingLoan></PendingLoan>
                    },
                    {
                        path:'/dashboard/approved-loans',
                        element:<ApprovedLoan></ApprovedLoan>
                    },
                  
                    {
                        path:'/dashboard/my-loans',
                        element:<MyLoans></MyLoans>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<BorrowerProfile></BorrowerProfile>
                    }
                ]
            },
            
        ]
  
    }
])
