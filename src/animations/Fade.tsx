import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Props {
	children: JSX.Element;
	initial: object;
	visible: object;
	transition: object;
}

function Fade({ children, initial, visible, transition }: Props) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			initial={initial}
			variants={{ visible }}
			animate={mainControls}
			transition={transition}>
			{children}
		</motion.div>
	);
}

export default Fade;
