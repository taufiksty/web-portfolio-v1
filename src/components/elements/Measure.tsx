import Reveal from '../../animations/Reveal';

interface Props {
	name: string;
	percentage?: string | '50%';
}

function Measure({ name, percentage }: Props) {
	return (
		<div className="lg:space-y-1 mx-1 lg:mx-0">
			<Reveal>
				<p className="font-inter text-[14px] font-medium text-[#232E35] dark:text-white">
					{name}
				</p>
			</Reveal>
			<div className="h-[6px] lg:h-2 bg-[#F5F3FE] w-full rounded-full">
				<div
					className="h-[6px] lg:h-2 bg-[#50C878] rounded-full"
					style={{ width: percentage }}></div>
			</div>
		</div>
	);
}

export default Measure;
