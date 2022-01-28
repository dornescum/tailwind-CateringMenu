import React from 'react';
// import hero from '../../public/assets/Hero.jpg'
import hero from '../../assets-next/img/pasta1.jpg';
import Image from "next/image";


const styling = {
	backgroundImage: `url(${hero.src})`,
	width: '100%',
	// height: '100%',
	// display:'block',
	// height: '300px',
	// margin:'0 auto',
	// width: '50%',
	display: 'flex',
	justifyContent:"center"
}

const Hero = () => {
	return (
		<div className='relative'>
			<Image src={hero} className='w-full h-24' width="100%" height="30%" layout="responsive" objectFit="cover"
				    alt='pasta image plate'/>

			<div className='absolute inset-6 md:inset-10 lg:inset-20 xl:inset-40'>
				<h1 className='text-pink-300 text-base md:text-4xl lg:text-6xl xl:text-8xl'>Best food in town</h1>
				<p className='text-pink-300 lg:text-4xl lg:py-2'>09090909</p>
			</div>
		</div>
	);
};

export default Hero;
