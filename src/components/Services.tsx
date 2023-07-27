import Reveal from '../animations/Reveal';
import Specialize from './elements/Specialize';

function Services() {
	return (
		<section
			id="services"
			className="py-10">
			{/* <AboveTitle> */}
			<div className="flex space-x-3">
				<img
					src="line.svg"
					alt="line"
				/>
				<Reveal>
					<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
						SERVICES
					</h3>
				</Reveal>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className="mt-5">
				<Reveal>
					<h1 className="font-bold text-[30px] font-plusJakartaSans dark:text-white">
						Specialized in
					</h1>
				</Reveal>
			</div>
			{/* </Title> */}

			{/* <Item> */}
			<div className="mt-5 lg:flex lg:gap-20">
				{/* <WebDevelopment> */}
				<Specialize
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#50C878"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
							/>
						</svg>
					}
					name="Web Development"
					desc="Create and maintain your websites and also take care of its performance and traffic capacity."
				/>
				{/* </WebDevelopment> */}

				{/* <FrontEndBackEnd> */}
				<Specialize
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#50C878"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
							/>
						</svg>
					}
					name="Front-End & Back-End"
					desc="Develop and maintain your websites while ensuring optimal performance and traffic capacity with expertise in both Front-End & Back-End."
				/>
				{/* </FrontEndBackEnd> */}

				{/* <Database> */}
				<Specialize
					svg={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="#50C878"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
							/>
						</svg>
					}
					name="Database"
					desc="Create and maintain your websites, ensuring seamless integration with databases, while optimizing performance and traffic capacity with expertise in Front-End, Back-End, and Database management."
				/>
				{/* </Database> */}
			</div>
			{/* </Item> */}
		</section>
	);
}

export default Services;
