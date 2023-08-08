import Reveal from '@animations/Reveal';

interface Props {
	svg: JSX.Element;
	name: string;
	desc: string;
}

function Specialize({ svg, name, desc }: Props) {
	return (
		<div className="flex flex-col justify-center items-center space-y-5 text-center w-2/3 aspect-square mx-auto ">
			{svg}
			<Reveal>
				<h4 className="font-plusJakartaSans font-medium text-[16px] dark:text-white">
					{name}
				</h4>
			</Reveal>
			<Reveal>
				<p className="font-inter text-[14px] dark:text-white leading-6">
					{desc}
				</p>
			</Reveal>
		</div>
	);
}

export default Specialize;
