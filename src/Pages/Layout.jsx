
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import React, { Fragment } from "react";
import {Outlet} from "react-router-dom"
import Home from './Home.jsx';
const Layout=()=>{
    return(
        <Fragment>
            <Header/>
            
            <main>
                <Outlet/>
              
            </main>
            
            <Footer/>






        </Fragment>



    )
}

export default Layout