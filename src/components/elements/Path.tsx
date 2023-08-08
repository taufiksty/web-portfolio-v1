import Reveal from '@animations/Reveal';

function Path() {
	return (
		<ol className="relative border-l-2">
			<li className="mb-10 ml-5">
				<div className="absolute w-3 h-3 bg-zinc-400 rounded-full mt-0.5 -left-1.5"></div>
				<Reveal>
					<h3 className="mb-3 text-[16px] font-medium font-plusJakartaSans leading-none text-[#232E35] dark:text-white">
						Bina Sarana Informatika University
					</h3>
				</Reveal>
				<Reveal>
					<p className="mb-4 font-normal font-inter text-[15px] text-[#656D72] dark:text-white">
						Bachelor's degree - Information System
					</p>
				</Reveal>
				<Reveal>
					<p className="font-inter font-medium text-[14px] text-[#232E35] dark:text-white">
						2021 - 2025
					</p>
				</Reveal>
			</li>
			<li className="mb-10 ml-5">
				<div className="absolute w-3 h-3 bg-zinc-400 rounded-full mt-0.5 -left-1.5"></div>
				<Reveal>
					<h3 className="mb-3 text-[16px] font-medium font-plusJakartaSans leading-none text-[#232E35] dark:text-white">
						Senior High School of 6 Depok
					</h3>
				</Reveal>
				<Reveal>
					<p className="mb-4 font-normal font-inter text-[15px] text-[#656D72] dark:text-white">
						High school - Mathematics and Natural Science
					</p>
				</Reveal>
				<Reveal>
					<p className="font-inter font-medium text-[14px] text-[#232E35] dark:text-white">
						2017 - 2020
					</p>
				</Reveal>
			</li>
		</ol>
	);
}

export default Path;
