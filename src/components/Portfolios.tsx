import Reveal from '@animations/Reveal';
import Card from '@elements/Card';
import { Carousel } from 'flowbite-react';

function Portfolios() {
	return (
		<section
			id='portfolios'
			className='py-10'>
			{/* <AboveTitle> */}
			<div className='flex space-x-3'>
				<img
					src='line.svg'
					alt='line'
				/>
				<Reveal>
					<h3 className='font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]'>
						MY WORKS
					</h3>
				</Reveal>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className='mt-5'>
				<Reveal>
					<h1 className='font-bold text-[30px] dark:text-white font-plusJakartaSans'>
						Featured Portfolios
					</h1>
				</Reveal>
			</div>

			<div className='mt-5 lg:mt-10 xl:mx-10 2xl:mx-0 border rounded-lg h-[450px] sm:h-64 xl:h-80 2xl:h-[400px]'>
				<Carousel
					pauseOnHover
					slideInterval={3000}
					leftControl={
						<button className='bg-emerald-300 rounded-full p-2 hover:scale-105 hover:opacity-80 hidden md:block'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M15.75 19.5 8.25 12l7.5-7.5'
								/>
							</svg>
						</button>
					}
					rightControl={
						<button className='bg-emerald-300 rounded-full p-2 hover:scale-105 hover:opacity-80 hidden md:block'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								className='w-6 h-6'>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='m8.25 4.5 7.5 7.5-7.5 7.5'
								/>
							</svg>
						</button>
					}>
					<div className='flex h-full w-full items-center justify-center dark:text-white'>
						<Card
							imageSrc='loma.png'
							title='Loma (Lowongan Mahasiswa) Website'
							description='Sebagai tugas akhir matakuliah Web Programming 2, Loma merupakan sebuah website sistem lowongan magang, part-time, dan volunteer khusus untuk mahasiswa aktif. Website ini dibangun menggunakan teknologi Codeigniter dan MySQL.'
							linkGithub='https://github.com/taufiksty/web2-loma'
						/>
					</div>
					<div className='flex h-full w-full items-center justify-center dark:text-white'>
						<Card
							imageSrc='bersih-bersama.png'
							title='Bersih Bersama Website'
							description='Sebagai tugas akhir matakuliah Web Programming 3, BersihBersama
					merupakan sebuah website sistem pengaduan dan informasi masalah
					kebersihan lingkungan. Website ini dibangun dengan menggunakan
					teknologi React, CodeIgniter, dan MySQL.'
							linkGithub='https://github.com/taufiksty/bersihbersama-wp3'
						/>
					</div>
					<div className='flex h-full w-full items-center justify-center dark:text-white'>
						<Card
							imageSrc='notes-app-api.png'
							title='Notes App API'
							description="Notes App API adalah sebuah API untuk aplikasi catatan, hasil dari migrasi submission 'Belajar Fundamental Aplikasi Backend' dari Dicoding, yang menggunakan teknologi Express NodeJS, Prisma PostgreSQL, dan Typescript. Proyek ini juga dilengkapi dengan dokumentasi menggunakan Swagger."
							linkGithub='https://github.com/taufiksty/notes-app-api'
						/>
					</div>
					<div className='flex h-full w-full items-center justify-center dark:text-white'>
						<Card
							imageSrc='forum-api.png'
							title='Forum API'
							description="Forum API adalah sebuah API media sosial, mirip dengan Twitter, yang dibangun menggunakan Hapi NodeJS, PostgreSQL, Clean Architecture, dan Testing (Unit, Integration, dan Functional). Ini merupakan submission akhir untuk kursus 'Menjadi Backend Developer Expert' di Dicoding."
							linkGithub='https://github.com/taufiksty/forum-api-dicoding/tree/main'
						/>
					</div>
				</Carousel>
			</div>
			<div className='mt-10 flex w-full justify-center'>
				<button className='flex justify-center items-center space-x-2 border py-2 px-5 rounded bg-emerald-300 hover:opacity-80'>
					<Reveal>
						<p className='text-[14px] font-inter font-medium'>
							See more!
						</p>
					</Reveal>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						className='w-5 h-5'>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
						/>
					</svg>
				</button>
			</div>
		</section>
	);
}

export default Portfolios;
