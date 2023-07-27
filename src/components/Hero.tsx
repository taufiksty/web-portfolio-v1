import { motion } from 'framer-motion';

function Hero() {
	return (
		<section className="py-10 md:py-14 md:flex md:flex-row-reverse md:justify-center md:gap-5">
			{/* <Picture> */}
			<motion.div
				initial={{ opacity: 0, translateX: 50 }}
				animate={{ opacity: 1, translateX: 0 }}
				transition={{ duration: 1 }}
				className="relative flex flex-col items-center md:w-1/2">
				{/* <Front> */}
				<div className="border w-64 h-72 bg-emerald-300 rounded-3xl -rotate-12"></div>
				{/* </Front> */}
				{/* <Back> */}
				<div className="absolute w-64 h-72 bg-zinc-200 rounded-3xl flex flex-col">
					<img
						src="lines.svg"
						alt="lines"
						className="self-end"
					/>
					<img
						src="me.png"
						alt="me"
						width={230}
						className="absolute bottom-0 rounded-s-3xl"
					/>
				</div>
				{/* </Back> */}
			</motion.div>
			{/* </Picture> */}

			{/* <Intro> */}
			<motion.div
				initial={{ opacity: 0, translateY: 50 }}
				animate={{ opacity: 1, translateY: 0 }}
				transition={{ duration: 1 }}
				className="mt-20 md:mt-0 md:w-1/2 md:self-center">
				{/* <AboveTitle> */}
				<div className="flex space-x-3">
					<img
						src="line.svg"
						alt="line"
					/>
					<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
						MY NAME IS
					</h3>
				</div>
				{/* </AboveTitle> */}

				{/* <Title> */}
				<div className="mt-5">
					<h1 className="font-bold text-[30px] font-plusJakartaSans dark:text-white">
						Muhamad <span className="text-emerald-500">Taufik Satya.</span>
					</h1>
				</div>
				{/* </Title> */}

				{/* <Description> */}
				<div className="mt-5">
					<p className="text-[16px] text-[#232E35] dark:text-white leading-8">
						Second-year Information Systems student with a focus on web
						development, both front-end and back-end. Able in using technologies
						such as CodeIgniter, Node.js, and React. Passionate about creating
						dynamic and scalable web applications.
					</p>
				</div>
				{/* </Description> */}

				{/* <SocialMedia> */}
				<div className="mt-7 flex space-x-5">
					<a
						href="https://www.instagram.com/taufiksty/"
						target="_blank">
						<img
							src="Instagram.svg"
							alt="instagram"
							className="cursor-pointer hover:scale-105 dark:bg-white dark:rounded dark:p-1"
						/>
					</a>
					<a
						href="https://github.com/taufiksty"
						target="_blank">
						<img
							src="Github.svg"
							alt="github"
							className="cursor-pointer hover:scale-105 dark:bg-white dark:rounded dark:p-1"
						/>
					</a>
					<a
						href="https://twitter.com/willbethetopp"
						target="_blank">
						<img
							src="Twitter.svg"
							alt="twitter"
							className="cursor-pointer hover:scale-105 dark:bg-white dark:rounded dark:p-1"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/muhamadtaufiksatya/"
						target="_blank">
						<img
							src="Linkedin.svg"
							alt="linkedin"
							className="cursor-pointer hover:scale-105 dark:bg-white dark:rounded dark:p-1"
						/>
					</a>
				</div>
				{/* </SocialMedia> */}
			</motion.div>
			{/* </Intro> */}
		</section>
	);
}

export default Hero;
