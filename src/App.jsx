
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import contactImg from "./assets/images/contactImg.png"

function App() {

  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] bg-main-green text-white" >
        <div className="container mx-auto">
            <div className="flex flex-col items-center justify-center gap-3" >
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
