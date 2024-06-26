export default function Skills() {
	return (
		<section id="skills"
			className="px-10 w-full my-40 max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-white font-bold">
				My Skills
			</h2>
			<div className="mt-10 flex gap-5 justify-center 
							flex-wrap mx-auto max-w-xl">
				{["Javascript", "ReactJS","ES6","Redux", "HTML", "CSS"].map((skill, index) => {
					return (
						<div key={index}
							className="cursor-pointer px-9 py-4 
										rounded  text-lg bg-gradient-to-r from-fuchsia-500 to-pink-500
										flex items-center justify-center text-white
										font-bold hover:shadow-xl hover:scale-[120%]">
							{skill}
						</div>
					)})}
			</div>
		</section>
	)
}
