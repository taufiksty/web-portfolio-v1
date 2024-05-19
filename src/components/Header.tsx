import { useContext, useEffect, useState } from 'react';
import { DarkModeContext } from '@contexts/DarkMode';

function Header() {
	const [navbar, setNavbar] = useState(false);
	const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

	useEffect(() => {
		const html = document.querySelector('html');
		if (isDarkMode) {
			html?.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
		} else {
			html?.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
		}
	}, [isDarkMode]);

	return (
		<header className='sticky top-0 z-10'>
			<nav className='w-full bg-white dark:bg-[#1E1E1E] dark:text-white'>
				<div className='justify-between md:items-center md:flex'>
					{/* <NavbarMobile> */}
					<div>
						<div className='flex items-center justify-between py-3 md:py-5 md:block'>
							<a href='/'>
								<h2 className='text-2xl font-bold inline-flex items-baseline hover:text-emerald-300'>
									Taufik{' '}
									<img
										src='dot.svg'
										alt=''
										className='dark:fill-white'
									/>
								</h2>
							</a>
							<div className='inline-flex space-x-3 md:hidden items-center'>
								<button
									onClick={() => setIsDarkMode(!isDarkMode)}>
									{isDarkMode ? (
										<img
											src='sun.svg'
											alt='sun'
											className='hover:scale-105 shadow bg-white rounded-full p-1'
										/>
									) : (
										<img
											src='dark-toggle.svg'
											alt='dark-toggle'
											className='hover:scale-105'
										/>
									)}
								</button>
								<a
									className='border px-2 rounded my-1 hover:border-emerald-300 hover:text-emerald-300 hover:bg-zinc-50 dark:hover:bg-transparent'
									href='https://drive.google.com/file/d/18UnRomkUPujPDCD13zxMEFzEv85E1imH/view?usp=sharing'
									target='_blank'>
									Resume
								</a>
							</div>
							<div className='md:hidden z-10'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none hover:scale-105'
									onClick={() => setNavbar(!navbar)}>
									{navbar ? (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											viewBox='0 0 20 20'
											fill='#50C878'>
											<path
												fillRule='evenodd'
												d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
												clipRule='evenodd'
											/>
										</svg>
									) : (
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='w-6 h-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='#50C878'
											strokeWidth={2}>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					{/* </NavbarMobile> */}

					{/* <NavMenu> */}
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'block' : 'hidden'
							}`}>
							<ul className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
								<li className='text-gray-600 dark:text-white hover:text-emerald-300 dark:hover:text-emerald-300'>
									<a href='#services'>Services</a>
								</li>
								<li className='text-gray-600 dark:text-white hover:text-emerald-300 dark:hover:text-emerald-300'>
									<a href='#portfolios'>Portfolio</a>
								</li>
								<li className='text-gray-600 dark:text-white hover:text-emerald-300 dark:hover:text-emerald-300'>
									<a href='#educations'>Education</a>
								</li>
								<li className='text-gray-600 dark:text-white hover:text-emerald-300 dark:hover:text-emerald-300'>
									<a href='#contact'>Contact</a>
								</li>
							</ul>
						</div>
					</div>
					{/* </NavMenu> */}

					{/* <DarkToggleAndResumeButtonMD> */}
					<div className='hidden space-x-3 md:inline-flex items-center'>
						<button onClick={() => setIsDarkMode(!isDarkMode)}>
							{isDarkMode ? (
								<img
									src='sun.svg'
									alt='sun'
									className='hover:scale-105 shadow bg-white rounded-full p-1'
								/>
							) : (
								<img
									src='dark-toggle.svg'
									alt='dark-toggle'
									className='hover:scale-105'
								/>
							)}
						</button>
						<a
							href='https://drive.google.com/file/d/1KTJYfYRvBPfGenf0rDDOqjrILaSvkAkO/view?usp=sharing'
							target='_blank'
							className='border p-2 rounded my-1 hover:border-emerald-300 hover:text-emerald-300 hover:bg-zinc-50 dark:hover:bg-transparent'>
							Resume
						</a>
					</div>
					{/* </DarkToggleAndResumeButtonMD> */}
				</div>
			</nav>
		</header>
	);
}

export default Header;
