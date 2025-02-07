
import { useState } from "react";
import logo from "../assets/images/logo.png"

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return (
        <nav className="bg-main-green text-white " >
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-between p-2 ">
                    <div className="flex flex-row items-center gap-10" >
                        <img src={logo} alt="logo" className=" w-40" />
                        <ul className="lg:flex md:hidden items-center gap-3 hidden" >
                            <li className="p-1" >Product</li>
                            <li className="p-1" >Category</li>
                            <li className="p-1" >Container</li>
                        </ul>
                    </div>
                    <div className="md:flex flex-row gap-3 hidden" >
                        <button className="p-3 border border-green-second rounded-full" >Login</button>
                        <button className="p-3 border bg-green-second text-black rounded-full" >Sign Up</button>
                    </div>
                    <div onClick={openMenu}  className="block lg:hidden md:hidden" >
                        <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </div>
                </div>
            </div>
        </nav>
    )
}