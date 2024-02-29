import { motion, useScroll, useSpring } from 'framer-motion';
import Contact from '@components/Contact';
import Educations from '@components/Educations';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Portfolios from '@components/Portfolios';
import Services from '@components/Services';
import BackToTopButton from '@components/elements/BackToTopButton';

function App() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className='px-4 md:px-8 mx-auto lg:max-w-7xl font-inter lg:overflow-x-clip'>
			<motion.div
				className='progress-bar'
				style={{ scaleX }}
			/>
			{/* <Header> */}
			<Header />
			{/* </Header> */}

			{/* <Hero> */}
			<Hero />
			{/* </Hero> */}

			{/* <Services> */}
			<Services />
			{/* </Services> */}

			{/* <Portfolios> */}
			<Portfolios />
			{/* </Portfolios> */}

			{/* <Educations> */}
			<Educations />
			{/* </Educations> */}

			{/* <Contact> */}
			<Contact />
			{/* </Contact> */}

			{/* <Footer> */}
			<Footer />
			{/* </Footer> */}

			{/* <BackToTopButton> */}
			<BackToTopButton />
			{/* </BackToTopButton> */}
		</div>
	);
}

export default App;
