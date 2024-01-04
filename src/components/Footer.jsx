export const Footer = () => {
	return (
		<footer className="grid lg:grid-cols-4 grid-cols-1 gap-x-14 bg-primary lg:py-24 lg:px-52 p-4">
			<div className="flex justify-center items-center">
				<img className="lg:w-auto w-72 lg:h-fit" src="./images/logoLarge.jpg" alt="little lemon logo" />
			</div>
			<div className="lg:ms-12">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Links</p></li>
					<li><a href="">Home</a></li>
					<li><a href="">About</a></li>
					<li><a href="">Menu</a></li>
					<li><a href="">Reservations</a></li>
					<li><a href="">Order Online</a></li>
					<li><a href="">Login</a></li>
				</ul>
			</div>
			<div className="lg:ms-7">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Contact</p></li>
					<li><a href="">5723 S Damen Ave <br /> Chicago, Illinois(IL), 60636</a></li>
					<li><a href="">(123) 456-7890</a></li>
					<li><a href="">contact@littlelemon.com</a></li>
				</ul>
			</div>
			<div className="lg:ms-7">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Social Media Links</p></li>
					<li><a href="">Facebook</a></li>
					<li><a href="">Twitter</a></li>
					<li><a href="">Instagram</a></li>
				</ul>
			</div>
		</footer>
	)
}
