
import Header from '../Components/Header.jsx'
import Footer from '../Components/Footer.jsx'

import React, { Fragment } from "react";
import {Outlet} from "react-router-dom"

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