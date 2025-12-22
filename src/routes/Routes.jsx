
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
import RoleRoute from './RoleRoute'
import DashBoardFontPage from '../Components/DashBoardFontPage'
import { RollerCoaster } from 'lucide-react'
import UpdateLoan from '../Components/updateLoan'

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
                        path:'/profile',
                        element:<BorrowerProfile></BorrowerProfile>
                    },
            {
                path:'/dashboard',
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<DashBoardFontPage></DashBoardFontPage>

                    },
                    {
                        path:'/dashboard/manage-users',

                        element:<RoleRoute allowedRoles={['admin']}>
                            <ManageUser></ManageUser>
                        </RoleRoute>
                        
                        
                    },
                    {
                        path:'/dashboard/all-loan',
                        element:
                        <RoleRoute allowedRoles={['admin']}>
                            <AllLoan></AllLoan>
                        </RoleRoute>
                        
                    },
                    {
                        path:'/dashboard/loan-application',
                        element:<RoleRoute allowedRoles={['admin']}>
                            <DLoanApplication></DLoanApplication>
                        </RoleRoute>
                    },
                    {
                        path:'/dashboard/add-loan',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <AddLoan></AddLoan>
                            </RoleRoute>
                        
                        
                    },
                    {
                        path:'/dashboard/manage-loans',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <ManageLoans></ManageLoans>
                            </RoleRoute>
                        
                        
                    },
                    {
                        path:'/dashboard/pending-loans',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <PendingLoan ></PendingLoan>
                            </RoleRoute>
                    },
                    {
                        path:'/dashboard/approved-loans',
                        element:<RoleRoute allowedRoles={['manager']}> 
                            <ApprovedLoan></ApprovedLoan>
                        </RoleRoute>
                    },
                  
                    {
                        path:'/dashboard/my-loans',
                        element:<RoleRoute allowedRoles={['Borrower']}>
                            <MyLoans></MyLoans>
                        </RoleRoute>
                    },
                    {
                        path:'/dashboard/profile',
                        element:<RoleRoute allowedRoles={['manager','Borrower']}>
                            <BorrowerProfile></BorrowerProfile>
                        </RoleRoute>
                    },
                    {
                        path:'/dashboard/updateloan/:id',
                        element:<RoleRoute allowedRoles={['admin']}>
                            <UpdateLoan></UpdateLoan>
                        </RoleRoute>
                    }
                ]
            },
            
        ]
  
    }
])
