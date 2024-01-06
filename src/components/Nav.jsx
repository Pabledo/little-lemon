import { Link } from "react-router-dom"


export const Nav = () => {
    return (
        <nav className="flex justify-evenly items-center gap-12 bg-white p-5">
            <img className="w-40 h-auto" src={"./images/logo.jpg"} alt="little lemon logo" />
            <ul className="flex justify-center gap-5 font-bold">
                <li><Link to="/">Home</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><Link to="">Order Online</Link></li>
                <li><Link to="">Login</Link></li>
            </ul>
        </nav>
    )
}
