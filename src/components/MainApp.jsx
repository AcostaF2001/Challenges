import React from 'react'
import { Link,NavLink,Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Loginpage } from './Loginpage'
import { AboutPage } from './AboutPage'



export const MainApp= () =>{
  return (
    <>
        <h1>MainApp</h1>
        <hr />
        <NavLink className={ (args) => ` ${ args.isActive ? 'active' : '' } ` } to="/"> Home </NavLink>
        {/* <Link to="/">Home</Link> */}
        <NavLink className={ (args) => ` ${ args.isActive ? 'active' : '' } ` } to="About"> About </NavLink>
        {/* <Link to="about">About</Link> */}
        {/* <Link to="login">Login</Link> */}
        <NavLink className={ (args) => ` ${ args.isActive ? 'active' : '' } ` } to="Login"> About </NavLink>


        <Routes>
            <Route path="/" element={<Homepage/>}></Route>
            <Route path="login" element={<Loginpage/>}></Route>
            <Route path="about" element={<AboutPage/>}></Route>
            <Route path="/*" element={<Navigate to="/about"/>}></Route>

        </Routes>

    </>
  )
}
