import { signOut } from 'firebase/auth';
import {AuthContext} from '../providers/AuthContext'
import { LogOut, LucideMenu, MenuIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { auth } from '../Firebase/firebase.config';
import toast from 'react-hot-toast';

const Navbar = () => {
  const {user,setUser}=useContext(AuthContext)
  const [theme,setTheme]=useState(localStorage.getItem('theme') || 'light')
    useEffect(()=>{
        const html=document.querySelector('html')
        html.setAttribute('data-theme',theme)
        localStorage.setItem('theme',theme)

    },[theme])
    const handleTheme=(checked)=>{
        setTheme(checked?"dark":"light")
    }
        
  const navigate=useNavigate()
  console.log(user)
  const handleLogOut=(e)=>{
    e.preventDefault()
    signOut(auth)
    .then(res=>{
      setUser(null)
      navigate('/')
      toast.success('Log Out Successful')
    })
    .catch(err=>{
      toast.error(err.message)
    })
  }
  return (
    <div className="flex justify-between bg-[#1F7A6F] p-2 items-center shadow-2xl mb-20">
      <NavLink className="text-white font-bold text-2xl" to='/'>🪙LoanLink</NavLink>
      <div>
        <div className="dropdown dropdown-left">
          <div tabIndex={0} role="button" className="btn m-1">
            <LucideMenu></LucideMenu>Menu
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <NavLink to='/' className={({isActive})=>isActive?"bg-black text-white":""}>Home</NavLink>
            </li>
            <li>
              <NavLink  to='/all' className={({isActive})=>isActive?"bg-black text-white":""}>All Loans</NavLink>
            </li>
            {
              user?
              <>
               <li>
              <NavLink  to='/dashboard'  className={({isActive})=>isActive?"bg-black text-white":""}>Dashboard</NavLink>
              
            </li>
            <li>
              <NavLink  to='/profile'  className={({isActive})=>isActive?"bg-black text-white":""}>User Avator</NavLink>
              
            </li>
            <li>
              <button  type="button" onClick={handleLogOut} ><LogOut></LogOut>Logout</button>
              
            </li>
            
              </>
              :
             

              <>
              
            <li>
              <NavLink to='/aboutus'  className={({isActive})=>isActive?"bg-black text-white":""}>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/contact'  className={({isActive})=>isActive?"bg-black text-white":""}>Contact</NavLink>
            </li>
            <li>
              <NavLink  to='/login' className={({isActive})=>isActive?"bg-black text-white":""}>Log In</NavLink>
            </li>
            <li>
              <NavLink to='/register' className={({isActive})=>isActive?"bg-black text-white":""}>Register</NavLink>
            </li>
              </>
            }
            <li>
               <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  
        <input
  type="checkbox"
  checked={theme === "dark"}
  onChange={(e) => handleTheme(e.target.checked)}
  className="toggle"
/>

        
       
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
