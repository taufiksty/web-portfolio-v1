import Path from './elements/Path';

function Educations() {
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
				<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
					LEARNING PATH
				</h3>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className="mt-5">
				<h1 className="font-bold text-[30px] font-plusJakartaSans dark:text-white">
					Education & Skills
				</h1>
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
					<p className="font-inter text-[16px] text-[#656D72] dark:text-white leading-8">
						For 2+ years, I have been continuously learning in the field of
						front-end and back-end with new technologies and frameworks, and
						here you can see a summary of my skills.
					</p>
					<div className="space-y-4">
						{/* <React> */}
						<div className="lg:space-y-1 mx-1 lg:mx-0">
							<p className="font-inter text-[14px] font-medium text-[#232E35] dark:text-white">
								React
							</p>
							<div className="h-[6px] lg:h-2 bg-[#F5F3FE] w-full rounded-full">
								<div className="h-[6px] lg:h-2 bg-[#50C878] w-1/2 rounded-full"></div>
							</div>
						</div>
						{/* </React> */}
						{/* <NodeJS> */}
						<div className="lg:space-y-1 mx-1 lg:mx-0">
							<p className="font-inter text-[14px] font-medium text-[#232E35] dark:text-white">
								NodeJS
							</p>
							<div className="h-[6px] lg:h-2 bg-[#F5F3FE] w-full rounded-full">
								<div className="h-[6px] lg:h-2 bg-[#50C878] w-1/2 rounded-full"></div>
							</div>
						</div>
						{/* </NodeJS> */}
						{/* <Codeigniter> */}
						<div className="lg:space-y-1 mx-1 lg:mx-0">
							<p className="font-inter text-[14px] font-medium text-[#232E35] dark:text-white">
								Codeigniter
							</p>
							<div className="h-[6px] lg:h-2 bg-[#F5F3FE] w-full rounded-full">
								<div className="h-[6px] lg:h-2 bg-[#50C878] w-1/2 rounded-full"></div>
							</div>
						</div>
						{/* </Codeigniter> */}
					</div>
				</div>
				{/* </DescriptionAndSkills> */}
			</div>
			{/* </Content> */}
		</section>
	);
}

export default Educations;
