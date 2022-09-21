import React from 'react'
import { Link,NavLink,Navigate, Route, Routes } from 'react-router-dom'
import { Homepage } from './Homepage'
import { Loginpage } from './Loginpage'
import { AboutPage } from './AboutPage'
import { NavComponent } from './NavComponent'



export const MainApp= () =>{
  return (
    <>
        <h1>MainApp</h1>
        <hr />
        <NavComponent/>

    </>
  )
}
