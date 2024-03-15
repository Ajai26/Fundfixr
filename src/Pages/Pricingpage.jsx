import React from 'react';

const Pricingpage = () => {
    
    
  return (
    <div id='plans' className=" container   pricing-page">
        <div >
        
        <div className='text-center card9'>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-orange-500 font-[1000] text-[3.4rem] mb-5'>
            Choose the best 
          </h2>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-blue-500 font-[1000] text-[3.4rem] mb-5'>
            Subscription plan for you
          </h2>
          



        </div>
        <div class="row9 bg-white ">
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

       

          
         

        </div>
       
        
    </div>
    </div>
    
  );
};

export default Pricingpage;