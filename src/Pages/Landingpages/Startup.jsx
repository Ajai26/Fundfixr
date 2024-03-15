import React from 'react'
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Startup = () => {
  const data = [
    { name: 'Registered Startup', value: 300 },
    { name: 'Funded Startup', value: 150 },
    { name: 'Gov. Funded Startup', value: 100 },
    { name: 'Debt Funded', value: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  return (
    
    <div id='startuplanding' className='container'>
        <div className="from-[#ff9201] to-[#006dff] bg-gradient-to-b w-full  px-10 lg:px-28 lg:h-full overflow-hidden">
    
      <div className="lg:flex lg:pt-8 ">
        <Fade left cascade>
          <div className="lg:w-[800px] container  xl:pt-24 lg:pt-10 pt-20">
            <h1 className="font-[1000] xl:text-[4.2rem] lg:text-[3rem] md:text-[3.2rem] text-3xl lg:w-[79%] text-white xl:leading-[5rem] md:leading-[4rem]">
            Smart Product & Services for {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#6664F1] to-[#f0ab4a]">
                {" "}
                Founder's And Investor's{" "}
              </span>
              
            </h1>
            <div className="xl:flex justify-start mt-7">
              <div>
              <button class="button "><Link to="/plans">View plans</Link></button>
                
                  
                  
               
              </div>
              <p className="xl:w-[50%] lg:w-[70%] md:w-[80%] text-[20  px] text-[#faf9f6] lg:leading-6 xl:pl-5 xl:pt-0 pt-4 pb-4">
              Information, innovation & consultation platforms for startup founders, small business owners,
               investors, organisations, corporates, governments and researchers.
              </p>
            </div>
          </div>
        </Fade>
        

       
      </div>
    </div>
    <div class="row9 bg-blue-50 ">
          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Startups</h2>

                <p>Find startups to invest, partner, or compare. Startups product is the
                     largest collection of early-stage startups in India, with curated and 
                     integrated information on startup details, founders, incubator 
                    details, investments obtained and performance scores.</p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>
                

              </div>
            </div>
          </div>
          
         
         

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Angel Investors</h2>

                <p>Discover, analyse and identify the right angel investor for your startup. Angels product provides 
                    comprehensive information on angel investors investing in Indian startups, with vetted information on their .</p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>
              </div>
            </div>
          </div>

          <div class="column9 ">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Debt-Funding</h2>

                <p>India's first platform to find the perfect debt funding schemes for your startup. Debt Funding from YNOS helps entrepreneurs to identify & analyse various loan & debt funding 
                    options available for their venture along with comprehensive information on the startups they've supported.</p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>

              </div>
            </div>
          </div>

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'> Govt.Fundings</h2>

                <p>India's first & finest platform to discover & analyse suitable government funding schemes for your startup. Govt. Funding from YNOS helps entrepreneurs to identify & analyse various state & central government funding
                     schemes available for their venture along with comprehensive information on the startups they've supported.</p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>

              </div>
            </div>
          </div>

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Insights</h2>

                <p>Insight is an analytics & visualisation 
                    dashboard providing a bird's-eye view of the Indian startup ecosystem. 
                    Identify & keep track of the constantly changing dynamics of investments, 
                    market trends & sectors with powerful filters and make informed decisions.</p>

                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>
              </div>
            </div>
          </div>
          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Innovation Platform </h2>

                <p>Avail business consulting services & get expert guidance for your fundraising activities. 
                    Consult from YNOS helps you get invnestment ready with expert validation of your 
                    product offerings, strengthening your business plan & sharpening your investment pitch.</p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Explore</button>
                </div>


              </div>
            </div>
          </div>

        </div>
        <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div
                                      data-aos='fade-right' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400'
                                       className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Choose Your Plan</h3>
                                        <p>Select the correct paln for your startup</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                 

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div 
                                      data-aos='fade-left' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400' 
                                      className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Get Listed</h3>
                                        <p>get Listed on portal after choosing best plan and access to all investors and get matched your profile </p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div
                                      data-aos='fade-right' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400'
                                       className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Get Funding</h3>
                                        <p>After matched with the investor check funding and get funded</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                 

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div 
                                      data-aos='fade-left' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400' 
                                      className=' text bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Enjoy Platform Hasslefree</h3>
                                        <p>After get funded by investor enjoy the platform without any tension and grow your startup</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                

                            </div>

                        </div>

                    </div>
        <div>
        <div className="analytical-dashboard-panel">
      <h2>Our Overall Performance</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={60} outerRadius={80} paddingAngle={5}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <h3>Breakdown by Category:</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={`row-${index}`}>
              <td>{entry.name}</td>
              <td>{entry.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    <div className="lg:h-[200px] from-[#d18645] to-[#372786] bg-gradient-to-r lg:px-28 px-10 pb-10">
      <Fade bottom cascade>
        <p className="text-[#d5974f] font-semibold text-center lg:pt-12 pt-6 whitespace-nowrap">
          Trusted by large no of startups
        </p>
        <div className="lg:flex justify-evenly pt-10 grid grid-cols-2 md:grid-cols-3 gap-10">
          <img
            src="https://zesty-cajeta-af510d.netlify.app/Vector.svg"
            alt="Netflix"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/google-2015.svg"
            alt="Google"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/amazon.svg"
            alt="Amazon"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/airbnb.svg"
            alt="Air BNB"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/grab-logo.svg"
            alt="Grab"
          />
          <img
            src="https://zesty-cajeta-af510d.netlify.app/facebook.svg"
            alt="Facebook"
          />
        </div>
      </Fade>
    </div>
    <div>
      
    </div>
    
    </div>
  )
}

export default Startup