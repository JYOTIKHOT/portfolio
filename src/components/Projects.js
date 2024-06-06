import passwordValidatorImage from '../assets/password-validator.png'
export default function Projects() {
	return (
		<section id="projects"
				className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-center text-6xl text-white font-bold">
				My Projects
			</h2>
			<div className="p-10 bg-gradient-to-r from-fuchsia-500 to-pink-500 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://jyotikhot.github.io/password-validator/"
						className="w-full h-full">
						<img src={passwordValidatorImage}
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center text-white">
						<a className="hover:underline"
							href=
"https://jyotikhot.github.io/password-validator/">
							Password Validator
						</a>
					</h2>
					<p className='text-white'>
						This is a project built on react which validates the password. It have some predefined checks and if password passes all the checks it is considered as validated
					</p>
				</div>
			</div>
			{/* <div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/"
					className="w-full h-full">
						<img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20230904150620/gfg.png"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href=
"https://www.geeksforgeeks.org/15-puzzle-game-using-reactjs/">
							15 Puzzle Game
						</a>
					</h2>
					<p>
						15 puzzle game is basically a tile-based game in which there are 16 tiles
						out of which 1 tile is left empty and the remaining tiles are filled with
						numbers from 1 to 15 in random order. The user has to arrange all the tiles 
						in numerical order with the rule that they can only move the tile that is 
						a direct neighbor of the empty tile.
					</p>
				</div>
			</div> */}
		</section>
	);
}
