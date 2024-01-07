import { Link } from "react-router-dom"
import { NavLinks } from "./NavLinks"

export const Footer = () => {
	return (
		<footer className="grid lg:grid-cols-4 grid-cols-1 gap-x-14 bg-primary lg:py-24 lg:px-52 p-4">
			<div className="flex justify-center items-center">
				<img className="lg:w-auto w-72 lg:h-fit" src="./images/logoLarge.jpg" alt="little lemon logo" />
			</div>
			<div className="lg:ms-12">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Links</p></li>
					<NavLinks />
				</ul>
			</div>
			<div className="lg:ms-7">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Contact</p></li>
					<li><p>5723 S Damen Ave <br /> Chicago, Illinois(IL), 60636</p></li>
					<li><p>(123) 456-7890</p></li>
					<li><p>contact@littlelemon.com</p></li>
				</ul>
			</div>
			<div className="lg:ms-7">
				<ul className="lg:text-start text-center lg:mb-auto mb-6">
					<li><p className="font-bold">Social Media Links</p></li>
					<li><Link to="#">Facebook</Link></li>
					<li><Link to="#">Twitter</Link></li>
					<li><Link to="#">Instagram</Link></li>
				</ul>
			</div>
		</footer>
	)
}
