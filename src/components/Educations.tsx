import Fade from '@animations/Fade';
import Reveal from '@animations/Reveal';
import Path from '@elements/Path';

function Educations() {
	const animationFade = {
		initial: { opacity: 0, translateX: 50 },
		visible: { opacity: 1, translateX: 0 },
		transition: { duration: 1, delay: 0.25 },
	};

	return (
		<section
			id="educations"
			className="py-10">
			{/* <AboveTitle> */}
			<div className="flex space-x-3">
				<img
					src="line.svg"
					alt="line"
				/>
				<Reveal>
					<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
						LEARNING PATH
					</h3>
				</Reveal>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className="mt-5">
				<Reveal>
					<h1 className="font-bold text-[30px] font-plusJakartaSans dark:text-white">
						Education & Skills
					</h1>
				</Reveal>
			</div>
			{/* </Title> */}

			{/* <Content> */}
			<div className="lg:flex lg:gap-40 lg:mt-10">
				{/* <Path> */}
				<div className="mt-10 mx-3 lg:w-1/4">
					<Path />
				</div>
				{/* </Path> */}

				{/* <DescriptionAndSkills> */}
				<div className="mt-5 lg:mt-10 lg:w-1/2 space-y-4 lg:space-y-8">
					<Reveal>
						<p className="font-inter text-[16px] text-[#656D72] dark:text-white leading-8">
							For 2+ years, I have been continuously learning in the field of
							front-end and back-end with new technologies and frameworks, and
							here you can see a summary of my skills.
						</p>
					</Reveal>
					<div className="flex justify-center lg:justify-start pt-2 space-x-3">
						{/* <IconsDev> */}
						<Fade {...animationFade}>
							<img
								src="js.png"
								alt="js"
								className="w-10 rounded aspect-auto p-1"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="ts.png"
								alt="ts"
								className="w-10 rounded aspect-auto p-1"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="react.png"
								alt="react"
								className="w-12 rounded aspect-auto p-1"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="nodejs.png"
								alt="nodejs"
								className="w-14 rounded aspect-auto p-1 dark:bg-white"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="codeigniter.png"
								alt="codeigniter"
								className="w-10 rounded aspect-auto p-1"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="mysql.png"
								alt="mysql"
								className="w-14 rounded aspect-auto p-1"
							/>
						</Fade>
						<Fade {...animationFade}>
							<img
								src="postgresql.png"
								alt="postgresql"
								className="w-10 rounded aspect-auto p-1"
							/>
						</Fade>
						{/* </IconsDev> */}
					</div>
				</div>
				{/* </DescriptionAndSkills> */}
			</div>
			{/* </Content> */}
		</section>
	);
}

export default Educations;
