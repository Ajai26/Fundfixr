import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup';
import img from '../Images/clear.png'
const Home = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {

    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };

    const intervalId = setInterval(() => {
      cycleReviews();
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const reviews = [
    {
      name: "Jonathan D.",
      citation: "Sale Closed in 2019",
      quote:
        "Door.com has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful. Plus, I'm amazed at the flat-fee for the sale! Great way to save at closing. Door.com has been great. I feel like I got to work with a specialist at each point in the process. Everyone was very professional and very helpful. Plus, I'm amazed at the flat-fee for the sale! Great way to save at closing."
    },
    {
      name: "Peter C.",
      citation: "Sale Closed in 2019",
      quote:
        "I have bought and sold ten homes. This has been the most rewarding experience of them all. True professionalism and insight as well as great customer service makes me a believer in the Door.com business model."
    },
    {
      name: "Paulette H.",
      citation: "Sale Closed in 2019",
      quote:
        "The entire experience from onboarding to the sale of our home has been professional, expedited quickly, and I saved close to $14,000 in commissions. I will absolutely be using Door.com for the sale of my next property."
    },
    {
      name: "Ryan W.",
      citation: "Sale Closed in 2019",
      quote:
        "Service was excellent EVERY step of the process! No way to tell that Door.com provided a flat rate service by the way that they treated us and handled every step of the transactions."
    },
    {
      name: "Kevin R.",
      citation: "Sale Closed in 2019",
      quote:
        "Everyone we worked with was very responsive, professional and easy to work with. A great experience all around. I work in this industry too so my expectations are high. Great work by all."
    }
  ];
  return (
    <div id='auth' className='bg-[#FAF9F6] container'>
      <div className=' lg:pt-5  home  homeimg ' >
        <div className='text-center'>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-white font-[1000] text-[3.4rem] mb-5'>
            We help you
          </h2>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-white font-[1000] text-[3.4rem] mb-5'>
            grow your business faster
          </h2>



        </div>
      </div>
      <div className='bg-[#FAF9F6]'>
        <div class="clearfix ">
          <img src={img} alt="" class="imgclear" width="800" height="800" />
          <h3
            data-aos='fade-left'
            data-aos-duration='1500'
            className='  text-[#006dff] font-[700] text-[2.4rem] mb-5'>
            Welcome to FundFixr


          </h3>
          <p
            data-aos='fade-left'
            data-aos-duration='2000'
            className='lg:max-w-[1200px] lg:mx-auto text-black font-[400] text-[16px] leading-7'>
            <div>
              Greetings, go-getters! You've founf your way to FundFixr, the traiblazing platform
              that's transforming the startup investment game. Whether you're a bright-eyed
              startup in search of financial fairy godmother, or an invester scouting for a next
              big thing, we've got you covered.

            </div>
           
            <div className='text-orange-500 hover:text-purple-500 leading-7 font-[700] text-[16px]'>
              Read More
            </div>


          </p>

        </div>
      </div>
      <div className='container'>
        <div className='App bg-[#FAF9F6] lg:pt-5'>
          <div className='text-center'>

            <h3 data-aos='fade-left'
              data-aos-duration='1500'
              className='  text-black font-[700] text-[2.4rem] mb-5'
            >
             Why FundFixr?

            </h3>
            <p
              data-aos='fade-left'
              data-aos-duration='2000'
              className='lg:max-w-[600px] lg:mx-auto text-black font-[400] text-[16px] leading-7'>
              <div>
                Roll up your sleeves, folk's You're about to dive into the fabulous features that makes FundFixr
                the go-to platform for startup investment. Whether you're a budding entrepreneur or a seasoned
                investor, we are about to rock your world.

              </div>

            </p>


          </div>
        </div>

        <div class="row9 bg-[#fff] ">
          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-[#ff9201] text-center'>Intelligent Matching</h2>

                <p>Experience Intelligent Matching: Discover Tailored 
                  Investment Opportunities Aligned With Your Goals and Preferences.</p>


              </div>
            </div>
          </div>
          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-[#ff9201] text-center'>Intelligent Matching</h2>

                <p>Experience Intelligent Matching: Discover Tailored 
                  Investment Opportunities Aligned With Your Goals and Preferences.</p>


              </div>
            </div>
          </div>

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px]  text-[#ff9201] text-center'>Secure Transactions</h2>

                <p>Rest Assured with Secure Transactions: Your Financial Safety is 
                  Our Top Priority. Experience Peace of Mind with Every Investment.</p>


              </div>
            </div>
          </div>

          <div class="column9 ">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-[#ff9201]  text-center'>User-Friendly Interface</h2>

                <p>Seamless Investing Made Simple: Navigate with Ease through Our User-Friendly Interface. 
                  Accessible Tools for Effortless Financial Management.</p>


              </div>
            </div>
          </div>

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-[#ff9201] text-center'>Diverse Industries </h2>

                <p>Explore Diverse Industries: From Tech to Healthcare, Real Estate to Renewable Energy, 
                  Our Investment Opportunities Span Across a Wide Spectrum of Thriving Sectors.</p>


              </div>
            </div>
          </div>

          <div class="column9">
            <div class="card9 zoom">

              <div class="container9">
                <h2 className='font-[700] text-[20px] text-[#ff9201] text-center'>Success Stories</h2>

                <p>Explore Inspiring Success Stories: Discover How Our Investors Achieved Their Financial Goals and Transformed 
                  their Futures. Be Inspired to Start Your Own Journey Today!</p>


              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        
        <div class="row10">
  <div class="column10">
    <div class="card10 font-[500] text-[20px]">
      <p><i class="fa fa-user"></i></p>
      <h3> <CountUp start={0} end ={40} duration={5} suffix="+"/></h3>
      <p>Investors</p>
    </div>
  </div>

  <div class="column10">
    <div class="card10 font-[500] text-[20px]">
      <p><i class="fa fa-check"></i></p>
      <h3><CountUp start={0} end ={30} duration={5} suffix="+"/></h3>
      <p>Partners</p>
    </div>
  </div>
  
  <div class="column10">
    <div class="card10 font-[500] text-[20px]">
      <p><i class="fa fa-smile-o"></i></p>
      <h3><CountUp start={0} end ={500} duration={5} suffix="+"/></h3>
      <p>Happy Startup</p>
    </div>
  </div>
  
  <div class="column10">
    <div class="card10 font-[500] text-[20px]">
      <p><i class="fa fa-coffee"></i></p>
      <h3><CountUp start={0} end ={100} duration={5} suffix="+"/></h3>
      <p> Startup Funded</p>
      
    </div>
  </div>
</div>
<div className='text-center mt-7'>
          <h2
            data-aos='fade-right'
            data-aos-duration='1500'
            className='  text-black font-[500] text-[2.4rem] mb-5'>
            Hear from FundFixr Fan Club
          </h2>




        </div>

        <div className="App1">

          <ul className="carousel__list">
            {reviews.map((review, index) => {
              const { citation, name, quote } = review;
              const count = index + 1;
              return (
                <li
                  className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
                  key={count}
                >



                  <blockquote className="carousel__quote">
                    <cite>
                      <span className="carousel__name">{name}</span>
                      <span className="carousel__citation">{citation}</span>
                    </cite>
                    <p>"{quote}"</p>
                  </blockquote>
                </li>
              );
            })}
            <li className="carousel__indicator">
              <span
                className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
              />
              <span
                className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
              />
            </li>
          </ul>

        </div>
        <div className='cardnews zoom1'>
          <div>
            <div className='container9'>
              <h2 className="text-black font-semibold lg:text-xl md:pt-4 pt-4">
                Newsletter
              </h2>
              <p className="text-black xl:w-[555px] pt-4 pb-5">
                Be the first one to know about discounts, offers and events.
                Unsubscribe whenever you like.
              </p>
              <div className="relative">
                <input
                  placeholder="Enter your email"
                  className="rounded-full px-4 py-3 bg-[#FAF9F6] w-full input-p"
                ></input>
                <div className='justify-end flex  items-end'>
                <button class="button ">Subscribe</button>
             
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
      </div>
   




  )
}

export default Home