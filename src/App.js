
import { Fragment, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css';
import { Route } from 'react-router-dom';


import Home from './Pages/Home';
import Layout from './Pages/Layout'


import Aos from 'aos';
import Aboutus from './Pages/Aboutus';
import Investorlogin from './Pages/Investorlogin';
import Startuplogin from './Pages/Startuplogin';
import Investorsignup from './Pages/Investorsignup'
import Startupsignup from './Pages/Startupsignup'
import Startup from './Pages/Landingpages/Startup';
import Investor from './Pages/Landingpages/Investor';

import Valuationclaci from './Pages/Valuationclaci';
import Faq from './Pages/Faq';
import PricingPage from './Pages/Pricingpage';
import Insightsdashboard from './Pages/Insightsdashboard';
import Investorcard from './Pages/Investor/Investorcard';
import Contact from './Pages/Contact';

const routes = createBrowserRouter(createRoutesFromElements(
  <Route path ='/' element={<Layout/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<Aboutus/>}/>
    <Route path='/invest' element={<Investorlogin/>}/>
    <Route path='/startup' element={<Startuplogin/>}/>
    <Route path='/investor' element={<Investorsignup/>}/>
    <Route path='/founder' element={<Startupsignup/>}/>
    <Route path='/investorlanding' element={<Investor/>}/>
    <Route path='/startuplanding' element={<Startup/>}/>
    <Route path='/plans' element={<PricingPage/>}/>
    <Route path='/valuation' element={<Valuationclaci/>}/>
    <Route path='/faq' element={<Faq/>}/>
    <Route path='/insights' element={<Insightsdashboard/>}/>
    <Route path='/investorprofile' element={<Investorcard/>}/>
    <Route path='/contact' element={<Contact/>}/>
    
    
    
 
    

    

    

  </Route>



)
)

function App() {
  useEffect(()=>{
    Aos.init();
  },[]);
  return (
    <Fragment>
     <RouterProvider router={routes}/>
      
     
     
     
    </Fragment>
    
    
  );
      
}

export default App;
