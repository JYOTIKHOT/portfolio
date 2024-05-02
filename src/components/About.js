export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-gradient-to-r from-fuchsia-500 to-pink-500 max-w-5xl mx-auto rounded-xl">
			<div className="flex-1">
				<img src=
"https://media.geeksforgeeks.org/img-practice/Asset1-1641910145.svg"
					alt="About"
					className="w-full h-full bg-cover"/>
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-white 
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p className="text-white">
				As a Software Developer, I aim to write efficient
				code, drive testing practices, and stay current with innovative technologies. My focus is on maintaining application
				availability, promoting collaboration, and ensuring code quality.
				</p>
				<p className="text-white">
				Enthusiastic Front-End Developer with 2+ years of experience 
				leading and collaborating on complex ReactJS projects. Adept 
				at building user-centric interfaces and fostering seamless integration 
				with backend services. Proven ability to empower teams to deliver 
				high-quality applications on time.
				</p>
			</div>
		</section>
	);
}
