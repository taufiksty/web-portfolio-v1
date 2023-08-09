import { useState, useEffect } from 'react';

function BackToTopButton() {
	const [backToTopButton, setBackToTopButton] = useState<boolean>(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className="fixed bottom-5 right-12 md:bottom-8 md:right-8 lg:bottom-10 lg:scale-125">
			{backToTopButton && (
				<button
					className="bg-emerald-300 rounded-full p-2 hover:scale-105 hover:opacity-80"
					onClick={scrollUp}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-6 h-6">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 15.75l7.5-7.5 7.5 7.5"
						/>
					</svg>
				</button>
			)}
		</div>
	);
}

export default BackToTopButton;
