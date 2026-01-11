
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

import UpdateLoan from '../Components/updateLoan'
import PaymentSuccess from '../Components/PaymentSuccess'
import PaymentDetail from '../Components/PaymentDetail'
import Error from '../Pages/Error'
import AboutUs from '../Components/AboutUs'
import Contact from '../Components/Contact'

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>

            },
            {
                path:'/contact',
                element:<Contact>

                </Contact>
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
                element:
                    <Details></Details>
                
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
                        path:"/paymentsuccess",
                        element:<PaymentSuccess></PaymentSuccess>

                    },
                    {
                        path:'payment/:id',
                        element:<PaymentDetail></PaymentDetail>
                    },
            {
                path:'/dashboard',
                element:<PrivateRoute>
                    <Dashboard></Dashboard>
                </PrivateRoute>,
                children:[
                    {
                       index:true,
                        element:<DashBoardFontPage></DashBoardFontPage>

                    },
                    {
                        path:'manage-users',

                        element:<RoleRoute allowedRoles={['admin']}>
                            <ManageUser></ManageUser>
                        </RoleRoute>
                        
                        
                    },
                    {
                        path:'all-loan',
                        element:
                        <RoleRoute allowedRoles={['admin']}>
                            <AllLoan></AllLoan>
                        </RoleRoute>
                        
                    },
                    {
                        path:'loan-application',
                        element:<RoleRoute allowedRoles={['admin']}>
                            <DLoanApplication></DLoanApplication>
                        </RoleRoute>
                    },
                    {
                        path:'add-loan',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <AddLoan></AddLoan>
                            </RoleRoute>
                        
                        
                    },
                    {
                        path:'manage-loans',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <ManageLoans></ManageLoans>
                            </RoleRoute>
                        
                        
                    },
                    {
                        path:'pending-loans',
                        element:<RoleRoute allowedRoles={['manager']}>
                                <PendingLoan ></PendingLoan>
                            </RoleRoute>
                    },
                    {
                        path:'approved-loans',
                        element:<RoleRoute allowedRoles={['manager']}> 
                            <ApprovedLoan></ApprovedLoan>
                        </RoleRoute>
                    },
                  
                    {
                        path:'my-loans',
                        element:<RoleRoute allowedRoles={['borrower']}>
                            <MyLoans></MyLoans>
                        </RoleRoute>
                    },
                    {
                        path:'profile',
                        element:<RoleRoute allowedRoles={['manager','borrower']}>
                            <BorrowerProfile></BorrowerProfile>
                        </RoleRoute>
                    },
                    {
                        path:'updateloan/:id',
                        element:<RoleRoute allowedRoles={['admin','manager']}>
                            <UpdateLoan></UpdateLoan>
                        </RoleRoute>
                    },
                    
                    
                ]
            },
            
        ]
  
    }
])
