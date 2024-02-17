import React from 'react'
import Header from '../Share/Header'
import { Outlet } from "react-router-dom";
import Footer from '../Share/Footer';

const Root = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer> </Footer>
        
    </div>
    
  )
}

export default Root