import { useState } from "react"
import { NavLinks } from "./NavLinks";
import { Link } from "react-router-dom";


export const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <nav className="flex justify-evenly items-center gap-12 bg-white p-5">
                <Link to="/" aria-label="Go to Little Lemon">
                    <img className="w-40 h-auto" src={"./images/logo.jpg"} alt="little lemon logo" />
                </Link>
                <ul className="hidden md:flex justify-center gap-5 font-bold">
                    <NavLinks />
                </ul>
                <div className="md:hidden grid content-center">
                    <button onClick={toggleNavbar}>
                        {isOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        }
                    </button>
                </div>
            </nav>
            {isOpen && (
                <div className="md:hidden flex basis-full flex-col items-center font-bold list-none space-y-3 underline underline-offset-4 pb-5">
                    <NavLinks />
                </div>
            )}
        </>
    )
}
