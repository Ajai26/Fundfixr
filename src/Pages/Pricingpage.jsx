import React from 'react';

const Pricingpage = () => {
    
    
  return (
    <div id='plans' className=" container   pricing-page">
        <div >
        
        <div className='text-center card9'>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-[#006dff] font-[1000] text-[3.4rem] mb-5'>
            Choose the best 
          </h2>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-[#006dff] font-[1000] text-[3.4rem] mb-5'>
            Subscription plan for you
          </h2>
          



        </div>
        <div class="row9 bg-white ">
          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Basic</h2>

                <p></p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Buy Now </button>
                </div>
                

              </div>
            </div>
          </div>
          
         
         

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Ultra</h2>

                <p></p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Buy Now </button>
                </div>
              </div>
            </div>
          </div>

          <div class="column9 ">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-center'>Ultra-Max</h2>

                <p></p>
                <div className='justify-end flex  items-end '>
                <button class="button ">Buy Now </button>
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