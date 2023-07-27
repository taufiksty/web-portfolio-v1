import Reveal from '../animations/Reveal';
import Card from './elements/Card';

function Portfolios() {
	const scrollLeft = () => {
		const cardContent = document.getElementById('card-content');
		if (cardContent) cardContent.scrollLeft -= 500;
	};

	const scrollRight = () => {
		const cardContent = document.getElementById('card-content');
		if (cardContent) cardContent.scrollLeft += 500;
	};

	return (
		<section
			id="portfolios"
			className="py-10">
			{/* <AboveTitle> */}
			<div className="flex space-x-3">
				<img
					src="line.svg"
					alt="line"
				/>
				<Reveal>
					<h3 className="font-medium text-[#656D72] dark:text-white text-[12px] tracking-[1em]">
						MY WORKS
					</h3>
				</Reveal>
			</div>
			{/* </AboveTitle> */}

			{/* <Title> */}
			<div className="mt-5">
				<Reveal>
					<h1 className="font-bold text-[30px] dark:text-white font-plusJakartaSans">
						Featured Portfolios
					</h1>
				</Reveal>
			</div>
			{/* </Title> */}

			{/* <CarouselOrSlider> */}
			<div className="mt-5 lg:mt-10 lg:relative">
				{/* <Button> */}
				<div className="hidden absolute -right-1/2 -top-20 mr-10 lg:flex justify-center space-x-3 w-full">
					<button
						onClick={scrollLeft}
						className="border rounded-lg p-1 hover:bg-zinc-200">
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
								d="M15.75 19.5L8.25 12l7.5-7.5"
							/>
						</svg>
					</button>
					<button
						onClick={scrollRight}
						className="border rounded-lg p-1 hover:bg-zinc-200">
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
								d="M8.25 4.5l7.5 7.5-7.5 7.5"
							/>
						</svg>
					</button>
				</div>
				{/* </Button> */}
				{/* <Card> */}
				<div
					id="card-content"
					className="flex space-x-5 overflow-x-auto lg:overflow-x-hidden pb-7 scroll-smooth lg:space-x-10">
					<Card
						imageSrc="loma.png"
						title="Loma (Lowongan Mahasiswa) Website"
						description="Sebagai tugas akhir matakuliah Web Programming 2, Loma merupakan sebuah website sistem lowongan magang, part-time, dan volunteer khusus untuk mahasiswa aktif. Website ini dibangun menggunakan teknologi Codeigniter dan MySQL."
						linkGithub="https://github.com/taufiksty/web2-loma"
					/>
					<Card
						imageSrc="bersih-bersama.png"
						title="Bersih Bersama Website"
						description="Sebagai tugas akhir matakuliah Web Programming 3, BersihBersama
					merupakan sebuah website sistem pengaduan dan informasi masalah
					kebersihan lingkungan. Website ini dibangun dengan menggunakan
					teknologi React, CodeIgniter, dan MySQL."
						linkGithub="https://github.com/taufiksty/bersihbersama-wp3"
					/>
					<Card
						imageSrc="notes-app-api.png"
						title="Notes App API"
						description="Notes App API adalah sebuah API untuk aplikasi catatan, hasil dari migrasi submission 'Belajar Fundamental Aplikasi Backend' dari Dicoding, yang menggunakan teknologi Express NodeJS, Prisma PostgreSQL, dan Typescript. Proyek ini juga dilengkapi dengan dokumentasi menggunakan Swagger."
						linkGithub="https://github.com/taufiksty/notes-app-api"
					/>
					<Card
						imageSrc="forum-api.png"
						title="Forum API"
						description="Forum API adalah sebuah API media sosial, mirip dengan Twitter, yang dibangun menggunakan Hapi NodeJS, PostgreSQL, Clean Architecture, dan melakukan Testing (Unit, Integration, dan Functional). Ini merupakan submission akhir untuk kursus 'Menjadi Backend Developer Expert' di Dicoding."
						linkGithub="https://github.com/taufiksty/forum-api-dicoding/tree/main"
					/>
				</div>
				{/* </Card> */}
			</div>
			{/* </CarouselOrSlider> */}
		</section>
	);
}

export default Portfolios;
