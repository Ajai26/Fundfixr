import React from 'react'
import Img5 from '..//Images/icon .png'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-[#36454f] container pt-12'>
      <div>
      <img  class=" logo " src={Img5} alt=""/>
     
      </div>
      <div className=' '>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-[#36454f] font-[600] mb-5 md:text-[2rem]'>
             Talk to Industry Experts 
            </h2>
            
            </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-black leading-4 mt-3 sm:mt-0'>
              
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-18 mt-10'>
              <span className='text-black text-[15px] font-[600]'>
                Follow Me:
              </span>
              <span className='button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='' className=' text-gray-300 font-[500] text-[18px] '>
                  <i class="ri-youtube-line"></i>
                </a>

              </span>
              <span className='button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='' className=' text-gray-300 font-[500] text-[18px] '>
                  <i class="ri-github-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='' className=' text-gray-300 font-[500] text-[18px] '>
                  <i class="ri-linkedin-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='#instagram' className=' text-gray-300 font-[500] text-[18px] '>
                  <i class="ri-instagram-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='' className=' text-gray-300 font-[500] text-[18px] '>
                  <i class="ri-twitter-x-line"></i>
                </a>

              </span>

            </div>

          </div>

        </div>
       
          
       

      </div>
      <div className='bg-[#faf9f6] pt-12 flex items-center justify-center  text-black text-[14px]'>
        Copyright {year} by FundFixr - All right reserved.
      </div>

    </footer>
  )
}

export default Footer