import React from 'react'
import {Navbar} from "../components/Navbar"
import {Outlet} from "react-router-dom"
import {Pagefooter} from "../components/Pagefooter"



export const Layout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
        <Pagefooter/>
    </>
  );
};
