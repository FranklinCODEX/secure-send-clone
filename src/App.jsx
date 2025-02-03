
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import contactImg from "./assets/images/contactImg.png"
import cashSend from "./assets/images/cash.png"
import Icon1 from "./assets/images/fast Icon.png"
import Icon2 from "./assets/images/Managment Icon.png"
import Icon3 from "./assets/images/Flexibility Icon .png"

function App() {

  const handleFaq = (e) => {
    e.currentTarget.parentElement.parentElement.querySelector('.faq_content').classList.toggle('hidden');
    e.currentTarget.classList.contains('fa-chevron-right') ? 
    e.currentTarget.classList.replace('fa-chevron-right', 'fa-chevron-down') :
    e.currentTarget.classList.replace('fa-chevron-down', 'fa-chevron-right');
  }

  return (
    <>
      <Navbar />

      <section>
        <div className="container mx-auto ">
          <div className="flex flex-col gap-7 items-center justify-center"> 
            <div className="flex flex-row justify-between text-white bg-main-green p-10 gap-10 rounded-lg ">
              <div className="flex flex-col items-start justify-center gap-10">
                <small className="border-b border-green-second">Try Us Risk-Free</small>
                <h3 className=" font-bold text-5xl ">Experience Zero Fees on Your First Transaction</h3>
                <p className="w-[85%]">It’s our way of showing you how seamless and cost-effective our payment solution can be. No hidden fees, just a straightforward and risk-free introduction to our platform.</p>
                <span className="text-green-second space-x-2 flex " >
                  <i className="fa-solid fa-atom text-xl "></i>
                  <a className="border-b" href="#">Click this link to dowload now</a>
                </span>
                <button className="bg-green-second px-7 py-4 text-xl rounded-full text-black flex space-x-2 font-semibold items-center " >
                  <a href="#">Start Your Free Trial </a>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
              <img className="w-[40vw] " src={cashSend} alt="" />
            </div>

            <div className="grid grid-cols-3 my-16 p-2 gap-5">
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
              <h3 className=" font-bold text-4xl  " >Frequently Asked Questions</h3>
              <p>Your questions, our answers. Everything you need to know in one place.</p>
            </div>

            <div className="grid grid-cols-2 place-items-baseline gap-4 mt-5">
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
              <h2 className="text-5xl" >Get in touch today</h2>
              <p className="w-[55%] text-center " >Have questions or need assistance? We&apos;re here to help! Reach out to us today and let’s work together to find the best solutions for your business needs.</p>
            </div>
            <div className="flex flex-row p-14 justify-between items-center gap-10 ">
              <form className="grid grid-cols-2 gap-5 "  action="">
                <div className="flex flex-col gap-1 " >
                    <label htmlFor="">Name</label>
                    <input className="w-[20vw] h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="Enter your name" />
                </div>
                <div className="flex flex-col gap-1 " >
                    <label htmlFor="">Email</label>
                    <input className="w-[20vw] h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="email" placeholder="test@gmail.com" />
                </div>
                <div className="flex flex-col gap-1 " >
                    <label htmlFor="">Phone</label>
                    <input className="w-[20vw] h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="229 01 23456789" />
                </div>
                <div className="flex flex-col gap-1 " >
                    <label htmlFor="">Company</label>
                    <input className="w-[20vw] h-[7vh] bg-white focus:outline-none rounded-lg text-black p-3 " type="text" placeholder="meta" />
                </div>
                <div className="flex flex-col gap-1 col-span-2 " >
                    <label htmlFor="">Leave us message</label>
                    <textarea className="bg-white focus:outline-none rounded-lg text-black p-3" name="" cols="10" rows="7" id="" placeholder="please type your message here !" ></textarea>
                </div>

                <button type="submit" className="bg-green-second px-3 py-2 rounded-full text-sm text-black w-[50%] " >Send message</button>
              </form>
              <img className="w-[40vw] " src={contactImg} alt="" />
            </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default App
