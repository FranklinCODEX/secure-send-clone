
import logo from "../assets/images/logo.png"

export default function Navbar() {

    return (
        <nav className="bg-main-green text-white " >
            <div className="container mx-auto">
                <div className="flex flex-row items-center justify-between p-2 ">
                    <div className="flex flex-row items-center gap-10" >
                        <img src={logo} alt="logo" className=" w-40" />
                        <ul className="flex items-center gap-3" >
                            <li className="p-1" >Product</li>
                            <li className="p-1" >Category</li>
                            <li className="p-1" >Container</li>
                        </ul>
                    </div>
                    <div className="flex flex-row gap-3" >
                        <button className="p-3 border border-green-second rounded-full" >Login</button>
                        <button className="p-3 border bg-green-second text-black rounded-full" >Sign Up</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}