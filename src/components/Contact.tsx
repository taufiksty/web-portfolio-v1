import Reveal from '@animations/Reveal';
import Form from '@elements/Form';

function Contact() {
	return (
		<section
			id="contact"
			className="py-20">
			{/* <AboveTitle> */}
			<div className="flex space-x-3">
				<img
					src="line.svg"
					alt="line"
				/>
				<Reveal>
					<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
						LET'S COLLABORATE
					</h3>
				</Reveal>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className="mt-5">
				<Reveal>
					<h1 className="font-bold text-[30px] font-plusJakartaSans dark:text-white">
						Contact Me
					</h1>
				</Reveal>
			</div>
			{/* </Title> */}

			<div className="mt-5 lg:mt-10 space-y-10 lg:space-y-0 lg:flex lg:flex-row-reverse lg:justify-end lg:gap-40">
				{/* <AddressEmailPhone> */}
				<div className="space-y-10 lg:w-1/4">
					{/* <Address> */}
					<div className="flex space-x-5 items-center">
						{/* <Icon> */}
						<div className="p-3 bg-[#F5F3FE] rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#50C878"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
								/>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
								/>
							</svg>
						</div>
						{/* </Icon> */}
						{/* <Value> */}
						<div>
							<Reveal>
								<h4 className="font-inter text-[#232E35] dark:text-white font-medium text-[16px]">
									Domicile
								</h4>
							</Reveal>
							<Reveal>
								<p className="text-[#656D72] dark:text-white font-inter text-[14px]">
									Depok, West Java, Indonesia
								</p>
							</Reveal>
						</div>
						{/* </Value> */}
					</div>
					{/* </Address> */}

					{/* <Phone> */}
					<div className="flex space-x-5 items-center">
						{/* <Icon> */}
						<div className="p-3 bg-[#F5F3FE] rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#50C878"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
								/>
							</svg>
						</div>
						{/* </Icon> */}
						{/* <Value> */}
						<div>
							<Reveal>
								<h4 className="font-inter text-[#232E35] dark:text-white font-medium text-[16px]">
									Phone
								</h4>
							</Reveal>
							<Reveal>
								<p className="text-[#656D72] dark:text-white font-inter text-[14px]">
									(+62) 897 9320 117
								</p>
							</Reveal>
						</div>
						{/* </Value> */}
					</div>
					{/* </Phone> */}

					{/* <Email> */}
					<div className="flex space-x-5 items-center">
						{/* <Icon> */}
						<div className="p-3 bg-[#F5F3FE] rounded-xl">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="#50C878"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
								/>
							</svg>
						</div>
						{/* </Icon> */}
						{/* <Value> */}
						<div>
							<Reveal>
								<h4 className="font-inter text-[#232E35] dark:text-white font-medium text-[16px]">
									E-Mail
								</h4>
							</Reveal>
							<Reveal>
								<p className="text-[#656D72] dark:text-white font-inter text-[14px]">
									taufik.satya09@gmail.com
								</p>
							</Reveal>
						</div>
						{/* </Value> */}
					</div>
					{/* </Email> */}
				</div>
				{/* </AddressEmailPhone> */}

				{/* <Form> */}
				<div className="lg:w-1/2">
					<Form />
				</div>
				{/* </Form> */}
			</div>
		</section>
	);
}

export default Contact;
