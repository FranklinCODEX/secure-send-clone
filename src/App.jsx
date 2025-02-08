
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import contactImg from "./assets/images/contactImg.png"
import cashSend from "./assets/images/cash.png"
import Icon1 from "./assets/images/fast Icon.png"
import Icon2 from "./assets/images/Managment Icon.png"
import Icon3 from "./assets/images/Flexibility Icon .png"
import Icon4 from "./assets/images/Icon4.png"
import Icon5 from "./assets/images/Icon5.png"
import transaction from "./assets/images/transaction.png"
import dashboard from "./assets/images/Dashboard.png"
import card from "./assets/images/card.png"
import Icon6 from "./assets/images/Icon6.png"
import Img1 from "./assets/images/grid1.png"
import Img2 from "./assets/images/grid2.png"
import Img3 from "./assets/images/grid3.png"

import { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigeger from 'gsap/src/ScrollTrigger'
import { useGSAP } from '@gsap/react';


function App() {

  gsap.registerPlugin(useGSAP, ScrollTrigeger); // register the hook to avoid React version discrepancies 

  const heroTitle = useRef();
  const heroImg = useRef()
  const cardImg = useRef()

  const handleFaq = (e) => {
    e.currentTarget.parentElement.parentElement.querySelector('.faq_content').classList.toggle('hidden');
    e.currentTarget.classList.contains('fa-chevron-right') ? 
    e.currentTarget.classList.replace('fa-chevron-right', 'fa-chevron-down') :
    e.currentTarget.classList.replace('fa-chevron-down', 'fa-chevron-right');
  }

  useGSAP(() => {
    gsap.from( heroTitle.current , { 
      x: -1000,
      duration: 1.3,
      delay: 1
    });

    gsap.fromTo(heroImg.current, {
      opacity: 0,
      duration: 1.5,
      delay: 1.7,
      y: 300
    }, {
      opacity: 100,
      duration: 1.5,
      delay: 2,
      y: 0
    } );

    gsap.from(cardImg.current, {
      scale: 0,
      delay: 1,
      duration: 2,
      rotate: 360,
      stagger: 0.5,
      scrollTrigger: {
        trigger: cardImg.current, 
      }
    })

}, );

  return (
    <>
      <Navbar />

      <section className=" bg-main-green text-white " >
        <div className="container mx-auto pt-14 ">
          <div className="flex items-center flex-col gap-7  ">
            <div  ref={heroTitle}className="flex flex-col gap-7 items-center" >
              <h3 className="lg:text-5xl text-3xl font-semibold text-center lg:w-[55%] w-full " >Effortless Global Payments, Secured and Streamlined</h3>
              <p className="lg:w-[50%] w-[80%] text-center " >Experience seamless, secure, and reliable payment solutions that simplify cross-border finance, allowing you to focus on what matters most.</p>
              <div className="flex lg:flex-row flex-col gap-7 mb-14 ">
                <button className="border border-green-second text-green-second  px-16 py-3 text-xl rounded-full flex space-x-2 items-center " >
                    <a href="#">Create account</a>
                </button>
                <button className="bg-green-second text-black px-16 py-3 text-xl rounded-full flex space-x-2 items-center " >
                  <a href="#">Contact sales</a>
                </button>
            </div>
            </div>

            <img ref={heroImg} className="w-[80%] " src={dashboard} alt="" />
          </div>
        </div>
      </section>

      <section className="my-14" >
        <div className="container mx-auto">
          <div className="flex gap-7 flex-col items-center ">
            <div className="flex flex-col gap-5 items-center  " >
                <small className="underline decoration-green-second underline-offset-2" >Why Choose Us</small>
                <h3 className="text-3xl font-bold text-center lg:w-[50%] w-full" >Effortless, Secure, and Scalable Global Payment Solutions for Businesses Worldwide</h3>
                <p className="lg:w-[50%] w-full text-center " >Unlock the power of seamless international transactions with our secure, intuitive SaaS solution. Here&apos;s why we&apos;re the preferred choice for businesses and individuals worldwide</p>
                <button className="bg-green-second px-10 py-3 text-xl rounded-full flex  space-x-2 items-center lg:justify-start justify-center lg:w-auto w-full " >
                  <a href="#">Contact us</a>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 my-16 p-2 gap-5">
              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon4} alt="" />
                <p className="font-bold">Comprehensive Security</p>
                <p className="text-center" >Protect your transactions with advanced encryption and compliance, ensuring your data is always secure.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon5} alt="" />
                <p className="font-bold">User-Friendly Interface</p>
                <p className="text-center" >Easily manage payments with our intuitive platform, designed for seamless navigation and quick access.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon6} alt="" />
                <p className="font-bold">Real-Time Insights</p>
                <p className="text-center" >Gain instant access to essential analytics, empowering you to make informed financial decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16" >
        <div className="container mx-auto">
          <div className="flex lg:flex-row gap-5 flex-col items-center justify-center px-7 ">
            <div className="flex flex-col gap-5 lg:items-start items-center ">
              <span className="underline decoration-green-second" >Why Payment</span>
              <h4 className="text-4xl font-bold" >We Offer The Best Stand Out Payment Solution</h4>
              <p>Choose a payment platform designed to elevate your global transactions with unparalleled security, ease of use, and scalability</p>
              <ul className="flex flex-col gap-3" >
                <li className="flex items-center gap-3 text-sm " >
                  <span className="px-2 py-1 bg-green-second rounded-full " ><i className="fa-solid text-black fa-check"></i></span>
                  Comprehensive Security
                </li>
                <li className="flex items-center gap-3 text-sm " >
                  <span className="px-2 py-1 bg-green-second rounded-full " ><i className="fa-solid text-black fa-check"></i></span>
                  User-Friendly Interface
                </li>
                <li className="flex items-center gap-3 text-sm " >
                  <span className="px-2 py-1 bg-green-second rounded-full " ><i className="fa-solid text-black fa-check"></i></span>
                  Real-Time Insights
                </li>
                <li className="flex items-center gap-3 text-sm " >
                  <span className="px-2 py-1 bg-green-second rounded-full " ><i className="fa-solid text-black fa-check"></i></span>
                  Scalable Solutions
                </li>
              </ul>
              <button className="bg-green-second px-10 py-4 text-xl rounded-full flex lg:w-auto w-full jus justify-center space-x-2 items-center " >
                  <a href="#">Learn more </a>
                  <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <img ref={cardImg} className="lg:w-[50%] w-full " src={card} alt="" />
          </div>
        </div>
      </section>

      <section className="my-14" >
        <div className="container mx-auto">
          <div className="flex flex-col gap-14 items-center">
            <div className="flex flex-col gap-3 lg:items-center items-start p-2" >
              <small className="underline decoration-green-second underline-offset-2" >Pricing</small>
              <h3 className="text-3xl font-semibold " >Affordable pricing plans</h3>
              <p>Simple Plans to Power Your Global Transactions—Choose the Right Fit for Your Business.</p>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1  gap-7 w-full p-2">

              <div className="border px-7 py-10 flex gap-4 flex-col  rounded-xl border-gray-300 " >
                <h3 className="font-bold text-2xl" >Basic</h3>
                <p className="text-6xl font-bold" >$99<span className="text-sm text-gray-400 " >/month</span></p>
                <p className="font-semibold text-lg " >Features :</p>
                <ul className="flex flex-col gap-3" >
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    User-Friendly Dashboard
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Secure Transactions
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Top-Tier Security
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Advanced Analytics
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Multi-Currency Support
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    API Integration
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Customizable Dashboard
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Dedicated Account Manager
                  </li>
                </ul>

                <button className="py-3 px-5 bg-green-second rounded-full" >Get Started</button>
              </div>


              <div className="border px-7 py-10 flex gap-4 flex-col  rounded-xl border-gray-300 bg-[#EBFCBE] " >
                <h3 className="font-bold text-2xl" >Gold</h3>
                <p className="text-6xl font-bold" >$199<span className="text-sm text-gray-400 " >/month</span></p>
                <p className="font-semibold text-lg " >Features :</p>
                <ul className="flex flex-col gap-3" >
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    User-Friendly Dashboard
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Secure Transactions
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Top-Tier Security
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Advanced Analytics
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Multi-Currency Support
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    API Integration
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Customizable Dashboard
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-gray-500 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Dedicated Account Manager
                  </li>
                </ul>

                <button className="py-3 px-5 bg-green-second rounded-full" >Get Started</button>
              </div>

              <div className="border px-7 py-10 flex gap-4 flex-col  rounded-xl border-gray-300 " >
                <h3 className="font-bold text-2xl" >Platinium</h3>
                <p className="text-6xl font-bold" >$399<span className="text-sm text-gray-400 " >/month</span></p>
                <p className="font-semibold text-lg " >Features :</p>
                <ul className="flex flex-col gap-3" >
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    User-Friendly Dashboard
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Secure Transactions
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Top-Tier Security
                  </li>
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Advanced Analytics
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Multi-Currency Support
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    API Integration
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Customizable Dashboard
                  </li>                  
                  <li className="flex items-center gap-2 text-sm " >
                    <span className="px-1 bg-green-600 rounded-full " ><i className="fa-solid text-white fa-check"></i></span>
                    Dedicated Account Manager
                  </li>
                </ul>

                <button className="py-3 px-5 bg-green-second rounded-full" >Get Started</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-main-green my-14 text-white " >
        <div className="container mx-auto p-14">
          <div className="flex lg:flex-row flex-col-reverse gap-20 justify-between items-center ">
            <img src={transaction} alt="" className="lg:w-[45vw] w-auto " />
            <div className="flex justify-start items-start flex-col gap-5 w-full " >
              <span className="underline decoration-2 decoration-green-second underline-offset-3" >Span Expérience</span>
              <h3 className="text-4xl font-bold" >Unlock the Full Potential of Global Transactions</h3>
              <small>Whether you&apos;re expanding your business internationally or optimizing your financial operations, our solution adapts to meet your unique needs with precision and efficiency.</small>
              <ul className="flex flex-col gap-5" >
                <li className="flex items-center gap-3" >
                  <span className="text-black bg-green-second py-1 px-2 rounded-full" ><i className="fa-solid fa-check"></i></span>
                  Seamless Integration</li>
                <li className="flex items-center gap-3">
                  <span className="text-black bg-green-second py-1 px-2 rounded-full" ><i className="fa-solid fa-check"></i></span>
                  Automated Processes</li>
                <li className="flex items-center gap-3">
                  <span className="text-black bg-green-second py-1 px-2 rounded-full" ><i className="fa-solid fa-check"></i></span>
                  Customizable Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="flex flex-col gap-7 items-center justify-center"> 
            <div className="grid lg:grid-cols-3 grid-cols-1 my-16 p-2 gap-5">
              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon4} alt="" />
                <p className="font-bold">Simplified Payments</p>
                <p className="text-center" >Effortlessly manage transactions with a user-friendly platform designed to make global payments straightforward and efficient.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon5} alt="" />
                <p className="font-bold">Secure Transactions</p>
                <p className="text-center" >Rest easy knowing your payments are protected by cutting-edge security measures, ensuring your data is always safe.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon6} alt="" />
                <p className="font-bold">Real-Time Insights</p>
                <p className="text-center" >Stay informed with instant access to analytics, allowing you to make data-driven decisions and optimize your financial strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-10 lg:block hidden " >
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 px-3">
            <small className="underline underline-offset-2 decoration-2 decoration-green-second" >Customer Stories</small>
            <div className="flex flex-row justify-between items-start ">
              <h1 className="text-6xl font-bold w-[60%] " >Customers success is our success</h1>
              <div className="flex gap-3" >
                <span className="border rounded-full p-3" ><i className="fa-solid fa-arrow-left-long text-4xl "></i></span>
                <span className="border rounded-full p-3 bg-green-second " ><i className="fa-solid fa-arrow-right-long text-4xl "></i></span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-x-7 mt-5" >
              <div className="flex flex-col gap-5 justify-start items-center">
                <div className="bg-green-second flex items-center justify-center rounded-xl min-w-[27vw]  " >
                  <img src={Img1} alt=""  />
                </div>
                <div className="flex flex-col gap-3 items-center justify-between " >
                  <h3 className="text-xl font-bold " >Transformative Payment Management</h3>
                  <p className="text-center">This platform has completely transformed how we manage our international payments. It&apos;s fast, secure, and incredibly easy to use!</p>
                  <button className="flex items-center gap-3 px-7 py-3 border rounded-full font-semibold " >
                    Read Story
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-5 justify-start items-center ">
                <div className="bg-green-second flex items-center relative justify-center rounded-xl min-w-[27vw]  " >
                  <img src={Img2} alt="" className="h-[55vh] object-center object-fill "  />
                </div>
                <div className="flex flex-col gap-6 items-center justify-between" >
                  <h3 className="text-xl font-bold " >Smarter Business Decisions</h3>
                  <p className="text-center">I love the real-time insights feature. It gives me the data I need to make smarter business decisions on the spot.</p>
                  <button className="flex items-center gap-3 px-7 py-3 border rounded-full font-semibold " >
                    Read Story
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-5 justify-start items-center">
                <div className="bg-green-second flex items-center relative justify-center rounded-xl min-w-[27vw]  " >
                  <img src={Img3} alt="" className="h-[55vh] object-center object-fill "  />
                </div>
                
                <div className="flex flex-col gap-6 items-center justify-between" >
                  <h3 className="text-xl font-bold " >Top-Notch Security</h3>
                  <p className="text-center">The security measures are top-notch. I feel confident knowing our transactions are protected at all times.</p>
                  <button className="flex items-center gap-3 px-7 py-3 border rounded-full font-semibold " >
                    Read Story
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

              </div>


            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto ">
          <div className="flex flex-col gap-7 items-center justify-center"> 
            <div className="flex lg:flex-row flex-col justify-between text-white bg-main-green p-10 gap-10 lg:rounded-3xl rounded-none ">
              <div className="flex flex-col lg:items-start items-center justify-center gap-10">
                <small className="border-b border-green-second">Try Us Risk-Free</small>
                <h3 className=" lg:font-bold font-extrabold lg:text-5xl text-2xl text-center ">Experience Zero Fees on Your First Transaction</h3>
                <p className="lg:w-[85%] w-full text-center ">It’s our way of showing you how seamless and cost-effective our payment solution can be. No hidden fees, just a straightforward and risk-free introduction to our platform.</p>
                <span className="text-green-second space-x-2 flex " >
                  <i className="fa-solid fa-atom text-xl "></i>
                  <a className="border-b" href="#">Click this link to dowload now</a>
                </span>
                <button className="bg-green-second px-7 py-4 text-xl rounded-full text-black flex space-x-2 font-semibold items-center " >
                  <a href="#">Start Your Free Trial </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <img className="lg:w-[40vw] w-auto " src={cashSend} alt="" />
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 my-16 p-2 gap-5">
              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon1} alt="" />
                <p className="font-bold">Fast setup</p>
                <p className="text-center" >Set up your account and start processing payments in minutes. Our streamlined onboarding process ensures you’re up and running with minimal effort.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon2} alt="" />
                <p className="font-bold">Easy Managment</p>
                <p className="text-center" >Manage your transactions with ease using our intuitive dashboard. Track, analyze, and control your payments all in one place.</p>
              </div>

              <div className="flex flex-col justify-center items-center gap-3">
                <img className="w-20" src={Icon3} alt="" />
                <p className="font-bold">Flexible integration</p>
                <p className="text-center" >Integrate with your existing systems effortlessly. Our platform supports various tools and applications to fit seamlessly into your workflow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh]" >
        <div className="container mx-auto p-10">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-5">
              <p className="border-b border-b-green-second" >Try us Risk-Free</p>
              <h3 className=" font-bold text-4xl lg:text-start text-center  " >Frequently Asked Questions</h3>
              <p className="lg:text-start text-center" >Your questions, our answers. Everything you need to know in one place.</p>
            </div>

            <div className="grid lg:grid-cols-2 grid-cols-1 place-items-baseline gap-4 mt-5">
              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content hidden" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content hidden" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content hidden" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content hidden" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

              <div className="flex flex-col border border-gray-300 px-5 py-7 gap-3 rounded-lg w-full " >
                <div className="flex flex-row  py-1 gap-5 items-center justify-between">
                  <p className="font-bold" >How do I get started with your payment platform ?</p>
                  <i onClick={handleFaq} className="fa-solid fa-chevron-right"></i>
                </div>
                <p className="faq_content hidden" >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sequi repellendus, perspiciatis aperiam maiores asperiores, labore delectus expedita totam dolores impedit eligendi facere sint qui pariatur maxime aspernatur velit explicabo!
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] bg-main-green text-white" >
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-3 p-5 " >
              <p className="border-b border-b-green-second" >Contact us</p>
              <h2 className="lg:text-5xl text-4xl " >Get in touch today</h2>
              <p className="lg:w-[55%] w-full text-center " >Have questions or need assistance? We&apos;re here to help! Reach out to us today and let’s work together to find the best solutions for your business needs.</p>
            </div>
            <div className="flex lg:flex-row flex-col lg:p-14 p-3 justify-between items-center gap-10 ">
              <form className="grid lg:grid-cols-2 grid-cols-1 w-full gap-5 "  action="">
                <div className="flex flex-col gap-1 " >
                    <label htmlFor="">Name</label>
                    <input className="lg:w-[20vw] w-full h-[10vh] lg:h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col gap-1" >
                    <label htmlFor="">Email</label>
                    <input className="lg:w-[20vw] w-full h-[10vh] lg:h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="email" placeholder="test@gmail.com" />
                </div>
                <div className="flex flex-col gap-1" >
                    <label htmlFor="">Phone</label>
                    <input className="lg:w-[20vw] w-full h-[10vh] lg:h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="229 01 23456789" />
                </div>
                <div className="flex flex-col gap-1" >
                    <label htmlFor="">Company</label>
                    <input className="lg:w-[20vw] w-full h-[10vh] lg:h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="meta" />
                </div>
                <div className="flex flex-col gap-1 lg:col-span-2 " >
                    <label htmlFor="">Leave us message</label>
                    <textarea className="bg-white focus:outline-none rounded-lg text-black p-3" name="" cols="10" rows="7" id="" placeholder="please type your message here !" ></textarea>
                </div>

                <button type="submit" className="bg-green-second px-3 py-2 rounded-full text-sm text-black w-[50%] " >Send message</button>
              </form>
              <img className="lg:w-[40vw] w-full " src={contactImg} alt="" />
            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
