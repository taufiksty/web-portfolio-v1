import Reveal from '@animations/Reveal';

function Footer() {
	return (
		<footer className="py-20 flex flex-col items-center space-y-3">
			{/* <SocialMedia> */}
			<div className="flex space-x-5">
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

			{/* <Copyright> */}
			<div className="text-[14px] text-[#656D72] dark:text-white text-center">
				<Reveal>
					<p>Design inspiration by Caleb Nyong</p>
				</Reveal>
				<Reveal>
					<p>&copy; 2023 - Muhamad Taufik Satya</p>
				</Reveal>
			</div>
			{/* </Copyright> */}
		</footer>
	);
}

export default Footer;
