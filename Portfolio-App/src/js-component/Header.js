import React from "react";
import {NavLink} from "react-router-dom";
const Header= () =>(
    <header>
    <h1>Portfolio</h1>
  
    <p><NavLink to="/" className={({isActive}) => isActive ? 'is-active':undefined}>Home</NavLink></p>
  
    <p><NavLink to="/portfolio" className={({isActive})=> isActive ? 'is-active':undefined}>Portfolio</NavLink>  </p>
   
    <p><NavLink to="/contact" className={({isActive})=>isActive?'is-active':undefined}>Contact-us</NavLink>  </p>
    </header>
    )
    export  default Header ;