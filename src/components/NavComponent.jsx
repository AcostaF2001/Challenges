import React from 'react'
import { Link,NavLink,Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Loginpage } from './Loginpage'
import { AboutPage } from './AboutPage'


export const  NavComponent=() =>{
  return (
    <>
        <div class="navbar navbar-expand-lg bg-light">
            <div class="navbar-nav">
                <NavLink className={ (args) => `nav-link ${ args.isActive ? 'active' : '' } ` } to="home"> Home </NavLink>
                {/* <Link to="/">Home</Link> */}
                <NavLink className={ (args) => `nav-link ${ args.isActive ? 'active' : '' } ` } to="About"> About </NavLink>
                {/* <Link to="about">About</Link> */}
                {/* <Link to="login">Login</Link> */}
                <NavLink className={ (args) => `nav-link ${ args.isActive ? 'active' : '' } ` } to="Login"> Login </NavLink>

            </div>
        </div>
       


        <Routes>
            <Route path="home" element={<Homepage/>}></Route>
            <Route path="login" element={<Loginpage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="/*" element={<Navigate to="/about"/>}></Route>

        </Routes>
    </>
  )
}
