

export const Nav = () => {
    return (
        <nav className="flex justify-evenly items-center gap-12 bg-white p-5">
            <img className="w-40 h-auto" src={"./images/logo.jpg"} alt="little lemon logo" />
            <ul className="flex justify-center gap-5 font-bold">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    )
}
