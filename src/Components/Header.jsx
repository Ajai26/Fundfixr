
import React,{} from 'react'

import Img5 from '..//Images/icon .png'

const Header = () => {
 
  return (
    <header className='w-full h-[100px] leading-[80px]  container flex items-center bg-[#36454f] gap-10'>
      <img  class=" logo " src={Img5} alt=""/>
     

    <div className='flex items-center justify-between  gap-10' >
          
            <div className='menu ' >
            
              <ul className='flex items-center gap-10'>
                <li><a    className=' text-[#ff9201] font-[600]  hover:text-red-500' href="/">
                  Home</a></li>
                <li><a   className=' text-[#ff9201] font-[600] hover:text-red-500' href="about">
                  AboutUs</a></li>
                
                   <div class="dropdown">
    <button class="dropbtn  text-[#ff9201] font-[600]  hover:text-red-500 ">Resources </button>
    <div class="dropdown-content">
      <a className='hover:text-red-500' href="investorprofile">Investor Profile</a>
      <a className='hover:text-red-500' href="#">Link 2</a>
      <a className='hover:text-red-500' href="#">Link 3</a>
      <a className='hover:text-red-500' href="#">Link 1</a>
      <a className='hover:text-red-500' href="#">Link 2</a>
      <a className='hover:text-red-500' href="#">Link 3</a>
    </div>
  </div>
                  <li><a  className=' text-[#ff9201] font-[600] hover:text-red-500' href="contact">
                  Contact Us</a></li>
                   </ul>
                   </div>
              <div className='flex items-center gap-10'>
               <div class="dropdown">
    <button class="dropbtn  text-[#ff9201] font-[600]  hover:text-red-500 ">Get Started </button>
    <div class="dropdown-content">
      <a className='hover:text-orange-400' href="startuplanding">Startup</a>
      <a className='hover:text-orange-400' href="investorlanding">Investor</a>
      <a className='hover:text-orange-400' href="valuation">Valuation Calculator</a>
      <a className='hover:text-orange-400' href="faq"> FAQ</a>
      <a className='hover:text-orange-400' href="#">Add Startup</a>
      <a className='hover:text-orange-400' href="insights">Insights</a>
    </div>
  </div>
  <div class="dropdown">
    <button class="dropbtn  text-[#ff9201] font-[600]  hover:text-red-500 ">Log In </button>
    <div class="dropdown-content">
      <a className='hover:text-orange-400' href="invest">Investor Log In</a>
      <a className='hover:text-orange-400' href="startup">Startup Log In</a>
   
    </div>
  </div>
                
               </div>
            </div>



               
               
</header>
  )
}

export default Header