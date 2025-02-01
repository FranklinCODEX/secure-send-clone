
import logo from "../assets/images/logo-black.png"

export default function Footer () {

    return (
        <footer className="w-full p-14">
            <div className="container mx-auto">
                <div className="grid grid-cols-6 gap-5">
                        <div className="flex flex-col col-span-2 gap-5 w-full " >
                                <img src={logo} alt="" className="w-40" />
                                <p className="w-[80%] " >Discover more about our mission, vision, and values as we work to simplify global payments for businesses and individuals.</p>
                                <div className="flex items-center gap-3" >
                                    <i className="fa-brands bg-green-second px-3 py-2 rounded-full  fa-facebook-f"></i>
                                    <i className="fa-brands bg-green-second px-3 py-2 rounded-full  fa-twitter"></i>
                                    <i className="fa-brands bg-green-second px-3 py-2 rounded-full  fa-instagram"></i>
                                    <i className="fa-brands bg-green-second px-3 py-2 rounded-full  fa-linkedin-in"></i>
                                    <i className="fa-brands bg-green-second px-3 py-2 rounded-full  fa-youtube"></i>
                                </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="font-bold" >Product</span>

                            <ul className="flex flex-col gap-1" >
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Case studies</li>
                                <li>Reviews</li>
                                <li>Update</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="font-bold" >Company</span>

                            <ul className="flex flex-col gap-1" >
                                <li>About us </li>
                                <li>Contact us</li>
                                <li>Careers</li>
                                <li>Culture</li>
                                <li>Blog</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="font-bold" >Support</span>

                            <ul className="flex flex-col gap-1" >
                                <li>Getting started</li>
                                <li>Help center</li>
                                <li>Server status</li>
                                <li>Report a bug </li>
                                <li>Chat support </li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <span className="font-bold" >Downloads</span>

                            <ul className="flex flex-col gap-1" >
                                <li>iOS</li>
                                <li>Android</li>
                                <li>Mac</li>
                                <li>Windows</li>
                                <li>Chrome</li>
                            </ul>
                        </div>
                </div>

                <hr className="mt-20 mb-5 text-gray-200 border"  />

                <div className="flex items-center justify-center " >
                    <div className="h-6 w-[60%] flex items-center justify-center " >
                        <p className="text-center" >Copyright © 2024 SecureSend | All Rights Reserved | Terms and Conditions | Privacy Policy</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}