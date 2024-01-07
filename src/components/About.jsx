
export const About = () => {
	return (
		<section className="lg:px-52 px-4 pb-40 pt-16 bg-white grid md:grid-cols-2 grids-cols-1 gap-x-14">
			<div>
				<h1 className="title text-6xl !text-black">Little Lemon</h1>
				<h2 className="title text-5xl !text-black !-mt-3">Chicago</h2>
				<p className="mt-5 text-lg">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aut ea quo, ipsum fuga inventore dolor, minus cum suscipit doloremque cupiditate veniam ex eaque exercitationem placeat! Itaque vitae aspernatur architecto!
				</p>
			</div>
			<div className="relative">
				<img className="w-72 shadow-2xl" src="./images/about1.jpg" alt="about1" />
				<img className="w-72 absolute md:top-2/4 top-2/4 md:right-20 right-0 shadow-xl" src="./images/about2.jpg" alt="about2" />
			</div>
		</section>
	)
}
