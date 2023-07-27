import Reveal from '../../animations/Reveal';

interface Props {
	imageSrc: string;
	title: string;
	description: string;
	linkDemo?: string;
	linkGithub: string;
}

function Card(props: Props) {
	const { imageSrc, title, description, linkDemo, linkGithub } = props;

	const alt = (imageSrc: string) => {
		const indexSplit = imageSrc.lastIndexOf('.');
		return imageSrc.substring(0, indexSplit);
	};
	return (
		<div className="border rounded-t-lg min-w-[500px] shadow">
			{/* <Image> */}
			<a
				href={linkDemo || linkGithub}
				target="_blank">
				<img
					src={imageSrc}
					alt={alt(imageSrc)}
					className="rounded-t-lg border max-h-56 w-full"
				/>
			</a>
			{/* </Image> */}
			{/* <Description> */}
			<div className="p-4 space-y-5">
				<Reveal>
					<h5 className="font-medium text-[16px] dark:text-white font-plusJakartaSans text-[#232E35]">
						{title}.
					</h5>
				</Reveal>
				<Reveal>
					<p className="font-inter text-[14px] text-[#232E35] dark:text-white">
						{description}
					</p>
				</Reveal>
				{/* <Link> */}
				<div className="flex space-x-2">
					{linkDemo && (
						<a
							href={linkDemo}
							target="_blank"
							className="border p-1 rounded flex items-center space-x-2 hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800 dark:hover:border-emerald-300">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
								/>
							</svg>
							<Reveal>
								<p className="font-inter font-medium text-[12px]">Demo</p>
							</Reveal>
						</a>
					)}
					<a
						href={linkGithub}
						target="_blank"
						className="border p-1 rounded flex items-center space-x-2 hover:bg-zinc-200 dark:text-white dark:hover:bg-zinc-800 dark:hover:border-emerald-300">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
							/>
						</svg>
						<Reveal>
							<p className="font-inter font-medium text-[12px]">Source code</p>
						</Reveal>
					</a>
				</div>
				{/* </Link> */}
			</div>
			{/* </Description> */}
		</div>
	);
}

export default Card;
