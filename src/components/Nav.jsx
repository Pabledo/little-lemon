

export const Nav = () => {
    return (
        <nav className="flex justify-center gap-10">
            <img  src={"../images/logo.jpg"} alt="little lemon logo" />
            <ul className="flex justify-center gap-5">
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
